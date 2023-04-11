<script lang="ts">
	import { goto } from '$app/navigation';
	import LoadingScreenDefault from '$lib/components/common/LoadingScreenDefault.svelte';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
	import GoBack from '$lib/components/primitives/GoBack.svelte';
	import SelectDropdown from '$lib/components/primitives/SelectDropdown.svelte';
	import TextInput from '$lib/components/primitives/TextInput.svelte';
	import Header from '$lib/components/register/RegisterHeader.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import CrossIcon from '$lib/icons/CrossIcon.svelte';
	import { isLoading, user } from '$stores';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import QrCode from '$lib/components/QRCode.svelte';
	import { checkIfSlugIsAlreadyTaken, getHotelData, publishHotelMenu } from '$utils/db';
	import { page } from '$app/stores';
	import DeleteIcon from '$lib/icons/DeleteIcon.svelte';

	const defaultData: RegisterationData = {
		hotel: {
			name: '',
			tagline: '',
			address: ''
		},
		author: '',
		slug: '',
		currency: 'INR',
		menu: [
			{
				category: '',
				items: [
					{
						name: '',
						description: '',
						price: ''
					}
				]
			}
		]
	};

	isLoading.set(true);

	let slugError: boolean | string = false;
	let isContinueBtnDisabled = false;
	const pendingRegisterationData = writable<RegisterationData>({ ...defaultData });
	let step: number = 1;
	let isFormSubmitted = false;

	onMount(async () => {
		const id = $page.url.searchParams.get('_id');

		window.onbeforeunload = () => {
			return '';
		};

		window.onhashchange = () => {
			if (!location.hash) return;
			if (location.hash === 'published') return;

			const hashStep = location.hash.split('-')[1];
			step = Number(hashStep);
		};

		validateSlug();

		if (id) {
			try {
				let data = await getHotelData(id);
				pendingRegisterationData.set(data as RegisterationData);
				validateSlug();

				isLoading.set(false);
			} catch (e) {
				goto('/register', { replaceState: true });
			}
		} else {
			if (localStorage.getItem('pending-data')) {
				pendingRegisterationData.set(JSON.parse(localStorage.getItem('pending-data') || '{}'));
				validateSlug();
			}
			pendingRegisterationData.subscribe(
				(value) => (localStorage['pending-data'] = JSON.stringify(value))
			);
			isLoading.set(false);
		}
	});

	const publishHotel = async () => {
		$isLoading = true;
		isFormSubmitted = true;
		await publishHotelMenu({ ...$pendingRegisterationData, author: $user.uid });
		pendingRegisterationData.set({ ...defaultData });
		goto('/dashboard');
	};

	const validateSlug = async () => {
		if (!$pendingRegisterationData.slug.trim()) return (slugError = 'Empty URL is not allowed');

		if (!/^[a-zA-Z0-9\-]+$/.test($pendingRegisterationData.slug)) {
			return (slugError = 'Special characters are not allowed');
		} else slugError = false;

		await checkIfSlugIsAlreadyTaken($pendingRegisterationData.slug).then((e) => {
			if (e) return (slugError = 'URL is already taken');

			if (!$pendingRegisterationData.slug.trim()) return (slugError = 'Empty URL is not allowed');

			if (!/^[a-zA-Z0-9\-]+$/.test($pendingRegisterationData.slug))
				return (slugError = 'Special characters are not allowed');

			isContinueBtnDisabled = false;
			slugError = false;
		});
	};
</script>

{#if $user}
	<Navbar />

	<Container className="mt-24">
		<Header {step} />

		<GoBack
			on:click={() => {
				step === 1 ? goto('/dashboard') : step--;
				location.hash = `step-${step}`;
			}}
			className="mt-12"
		/>

		{#if step === 1}
			<form
				action="none"
				on:submit|preventDefault={() => {
					step++;
					location.hash = `step-${step}`;
				}}
			>
				<div class="mt-14 flex flex-col items-center justify-center gap-6">
					<TextInput
						required
						bind:value={$pendingRegisterationData.hotel.name}
						on:change={() => {
							$pendingRegisterationData.slug = $pendingRegisterationData.hotel.name
								.trim()
								.replace(/\s+/g, '-')
								.toLowerCase();
							validateSlug();
						}}
						label="Registered hotel name:"
						placeholder="Hotel name here ..."
					/>
					<TextInput
						required
						bind:value={$pendingRegisterationData.hotel.tagline}
						label="Hotel tagline:"
						placeholder="Tagline here ..."
					/>
					<TextInput
						required
						bind:value={$pendingRegisterationData.hotel.address}
						label="Address:"
						placeholder="Address here ..."
					/>

					<div class="mt-10 flex flex-col items-center justify-center gap-6">
						<Button
							type="submit"
							disabled={!$pendingRegisterationData.hotel.name.trim() ||
								!$pendingRegisterationData.hotel.tagline.trim() ||
								!$pendingRegisterationData.hotel.address.trim()}
							label="Proceed"
							className="w-32 px-6"
							primary
						>
							Proceed <ArrowRight />
						</Button>

						<Button
							type="button"
							label="Cancel"
							className="w-32 px-6"
							on:click={() => {
								pendingRegisterationData.set(defaultData);
								goto('/dashboard');
							}}>Cancel</Button
						>

						<Button
							type="button"
							label="Clear data"
							className="w-32 px-6 whitespace-nowrap"
							on:click={() => {
								const result = confirm('Do you want to clear all fields?');
								if (!result) return;
								localStorage.setItem('pending-data', '');
								pendingRegisterationData.set(defaultData);
							}}
						>
							<DeleteIcon /> Clear</Button
						>
					</div>
				</div>
			</form>
		{:else if step === 2}
			<form
				action="none"
				on:submit|preventDefault={() => {
					step++;
					location.hash = `step-${step}`;
				}}
			>
				<div class="mt-14 flex w-full flex-col gap-6">
					<SelectDropdown
						value={$pendingRegisterationData.currency || 'INR'}
						on:change={(e) => {
							$pendingRegisterationData.currency = e.target.value || 'INR';
						}}
						label="Currency"
						id="currency"
						options={[
							{ id: 0, value: 'INR' },
							{ id: 1, value: 'USD' }
						]}
					/>

					<div class="mt-4">
						<div class="mb-1.5 text-[12px] font-semibold text-light-2">Menu:</div>

						<div class="mt-1 grid">
							{#each $pendingRegisterationData.menu as MenuCategory, categoryId}
								<div class="ml-4 border-l border-light-2/40 pl-5">
									<div class="relative {categoryId !== 0 && 'mt-8'}">
										<div class="absolute -left-5 top-1/2 h-px w-5 -translate-y-1/2 bg-light-4/40" />

										<TextInput
											required
											bind:value={MenuCategory.category}
											placeholder="Category name"
											className="!w-full"
										/>
										<button
											type="button"
											on:click={() => {
												$pendingRegisterationData.menu.splice(categoryId, 1);
												pendingRegisterationData.set($pendingRegisterationData);
											}}
											on:keypress
											class="absolute -top-2 -right-2 rounded border border-white/50 bg-dark-1 p-1.5"
										>
											<CrossIcon className="w-2 h-2 !stroke-white" />
										</button>
									</div>

									<div class="ml-4 grid gap-6 border-l border-light-2/40 pl-5 pt-6">
										{#each MenuCategory.items as item, itemId}
											<div class="">
												<div
													class="relative grid gap-4 rounded-md border border-dashed border-light-2/50 py-4 px-4"
												>
													<div
														class="absolute -left-5 top-5 h-px w-5 -translate-y-1/2 bg-light-4/40"
													/>

													<TextInput
														required
														bind:value={$pendingRegisterationData.menu[categoryId].items[itemId]
															.name}
														placeholder="Item name"
													/>
													<TextInput
														required
														bind:value={$pendingRegisterationData.menu[categoryId].items[itemId]
															.description}
														placeholder="Description"
													/>
													<TextInput
														required
														type="number"
														bind:value={$pendingRegisterationData.menu[categoryId].items[itemId]
															.price}
														placeholder="Price"
													/>

													<button
														type="button"
														on:click={() => {
															$pendingRegisterationData.menu[categoryId].items.splice(itemId, 1);
															pendingRegisterationData.set($pendingRegisterationData);
														}}
														on:keypress
														class="absolute -top-2 -right-2 rounded border border-white/50 bg-dark-1 p-1.5"
													>
														<CrossIcon className="w-2 h-2 !stroke-white" />
													</button>
												</div>

												{#if $pendingRegisterationData.menu[categoryId].items?.length - 1 === itemId}
													<Button
														type="button"
														on:click={() => {
															$pendingRegisterationData.menu[categoryId].items.push({
																name: '',
																description: '',
																price: ''
															});
															pendingRegisterationData.set($pendingRegisterationData);
														}}
														label="Add new item"
														className="rounded-[7px] w-fit mt-5">+</Button
													>
												{/if}
											</div>
										{/each}

										{#if MenuCategory.items.length === 0}
											<Button
												type="button"
												on:click={() => {
													$pendingRegisterationData.menu[categoryId].items.push({
														name: '',
														description: '',
														price: ''
													});
													pendingRegisterationData.set($pendingRegisterationData);
												}}
												label="Add new item"
												className="rounded-[7px] w-fit">+</Button
											>
										{/if}
									</div>

									{#if $pendingRegisterationData.menu?.length - 1 === categoryId}
										<Button
											type="button"
											on:click={() => {
												$pendingRegisterationData.menu.push({
													category: '',
													items: [
														{
															name: '',
															description: '',
															price: ''
														}
													]
												});
												pendingRegisterationData.set($pendingRegisterationData);
											}}
											label="Add new category"
											className="rounded-[7px] w-fit mt-6">+</Button
										>
									{/if}
								</div>
							{/each}
							{#if $pendingRegisterationData.menu?.length === 0}
								<Button
									type="button"
									on:click={() => {
										$pendingRegisterationData.menu.push({
											category: '',
											items: [
												{
													name: '',
													description: '',
													price: ''
												}
											]
										});
										pendingRegisterationData.set($pendingRegisterationData);
									}}
									label="Add new category"
									className="rounded-[7px] w-fit mt-0.5">New Category +</Button
								>
							{/if}
						</div>
					</div>

					<Button type="submit" label="Proceed" className="w-32 px-6 mx-auto mt-10" primary>
						Proceed <ArrowRight />
					</Button>
				</div>
			</form>
		{:else if step === 3}
			<form
				action=""
				on:submit|preventDefault={() => {
					publishHotel();
					location.hash = 'published';
				}}
			>
				<div class="mt-14 flex w-full flex-col gap-6">
					<div class="">
						<TextInput
							required
							maxLength={20}
							label="Choose custom url:"
							trailingAddon="m.saklani.dev/"
							placeholder=""
							on:keyup={() => {
								isContinueBtnDisabled = true;
								validateSlug();
							}}
							error={!!slugError}
							bind:value={$pendingRegisterationData.slug}
						/>

						{#if slugError}
							<div class="mt-1 text-sm text-red-500">{slugError}</div>
						{/if}
					</div>

					<SelectDropdown label="Select theme" options={[{ id: 1, value: 'Minimal' }]} />

					<div class="">
						<div class="mb-1.5 text-[12px] font-semibold text-light-2 md:text-xs">Preview:</div>
						<div class="qrcode flex w-full items-center justify-center rounded-md bg-white p-6">
							<QrCode bind:codeValue={$pendingRegisterationData.slug} squareSize={400} />
						</div>
					</div>

					<Button
						type="submit"
						label="Proceed"
						className="w-32 px-6 mx-auto mt-10"
						primary
						disabled={!$pendingRegisterationData.slug.trim() || isContinueBtnDisabled}
					>
						Proceed <ArrowRight />
					</Button>
				</div>
			</form>
		{/if}
	</Container>
{:else}
	<LoadingScreenDefault />
{/if}

{#if isFormSubmitted}
	<LoadingScreenDefault />
{/if}

<style lang="postcss">
	:global(html) {
		background-image: url('https://cdn.raster.app/kitatsu/library-1/oScZSUoQVJ?ixlib=js-3.7.0&width=2813&height=3640&compress=false&blur=374&bri=-8&fm=webp&q=30&s=5ee3f94d8f06ab702cf40220c12ffbd4');
	}
</style>
