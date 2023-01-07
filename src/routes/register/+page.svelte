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

	let isSlugTaken = false;
	let isContinueBtnDisabled = false;
	const pendingRegisterationData = writable<RegisterationData>({ ...defaultData });
	let step: number = 1;

	onMount(() => {
		const id = $page.url.searchParams.get('_id');

		if (id) {
			const getHotelDataQ = async () => {
				try {
					let data = await getHotelData(id);
					isLoading.set(false);
					pendingRegisterationData.set(data as RegisterationData);
				} catch (e) {
					goto('/register', { replaceState: true });
				}
			};
			getHotelDataQ();
		} else {
			if (localStorage.getItem('pending-data')) {
				pendingRegisterationData.set(JSON.parse(localStorage.getItem('pending-data') || '{}'));
			}
			pendingRegisterationData.subscribe(
				(value) => (localStorage['pending-data'] = JSON.stringify(value))
			);
			isLoading.set(false);
		}
	});

	const publishHotel = async () => {
		$isLoading = true;
		await publishHotelMenu({ ...$pendingRegisterationData, author: $user.uid });
		pendingRegisterationData.set({ ...defaultData });
		goto('/dashboard');
	};
</script>

{#if $user}
	<Navbar />

	<Container className="mt-24">
		<Header {step} />

		<GoBack
			on:click={() => {
				step === 1 ? goto('/dashboard') : (step -= 1);
			}}
			className="mt-12"
		/>

		{#if step === 1}
			<div class="flex flex-col items-center justify-center gap-6 mt-14">
				<TextInput
					bind:value={$pendingRegisterationData.hotel.name}
					on:change={() =>
						($pendingRegisterationData.slug = $pendingRegisterationData.hotel.name
							.trim()
							.replace(/\s+/g, '-')
							.toLowerCase())}
					label="Registered hotel name:"
					placeholder="hotel name here ..."
				/>
				<TextInput
					bind:value={$pendingRegisterationData.hotel.tagline}
					label="Hotel tagline:"
					placeholder="tagline here ..."
				/>
				<TextInput
					bind:value={$pendingRegisterationData.hotel.address}
					label="Address:"
					placeholder="Address here ..."
				/>

				<div class="flex items-center justify-center flex-col gap-6 mt-10">
					<Button
						on:click={() => {
							step++;
						}}
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
						label="Cancel"
						className="w-32 px-6"
						on:click={() => {
							pendingRegisterationData.set(defaultData);
							goto('/dashboard');
						}}>Cancel</Button
					>
				</div>
			</div>
		{:else if step === 2}
			<div class="flex flex-col w-full gap-6 mt-14">
				<SelectDropdown
					value={$pendingRegisterationData.currency || 'INR'}
					on:change={(e) => {
						$pendingRegisterationData.currency = e.target?.value || 'INR';
					}}
					label="Currency"
					id="currency"
					options={[
						{ id: 0, value: 'INR' },
						{ id: 1, value: 'USD' }
					]}
				/>

				<div class="mt-4">
					<div class="text-[12px] font-semibold text-light-2 mb-1.5">Menu:</div>

					<div class="grid mt-1">
						{#each $pendingRegisterationData.menu as MenuCategory, categoryId}
							<div class="ml-4 border-l border-light-4/40 pl-5">
								<div class="relative {categoryId !== 0 && 'mt-8'}">
									<div class="w-5 h-px bg-light-4/40 absolute -left-5 top-1/2 -translate-y-1/2" />

									<TextInput
										bind:value={MenuCategory.category}
										placeholder="Category name"
										className="!w-full"
									/>
									<button
										on:click={() => {
											$pendingRegisterationData.menu.splice(categoryId, 1);
											pendingRegisterationData.set($pendingRegisterationData);
										}}
										on:keypress
										class="absolute -top-2 -right-2 bg-dark-focus p-1.5 rounded border border-gray-600"
									>
										<CrossIcon className="w-2 h-2 !stroke-light-2" />
									</button>
								</div>

								<div class="ml-4 pl-5 pt-6 border-l border-light-4/40 grid gap-6">
									{#each MenuCategory.items as item, itemId}
										<div class="">
											<!-- transition:slide={{ duration: 200 }} -->
											<div
												class="relative py-4 border rounded-md border-dashed border-light-4/50 grid gap-4 px-4"
											>
												<div
													class="w-5 h-px bg-light-4/40 absolute -left-5 top-5 -translate-y-1/2"
												/>

												<TextInput
													bind:value={$pendingRegisterationData.menu[categoryId].items[itemId].name}
													placeholder="Item name"
												/>
												<TextInput
													bind:value={$pendingRegisterationData.menu[categoryId].items[itemId]
														.description}
													placeholder="Description"
												/>
												<TextInput
													bind:value={$pendingRegisterationData.menu[categoryId].items[itemId]
														.price}
													placeholder="Price"
												/>

												<button
													on:click={() => {
														$pendingRegisterationData.menu[categoryId].items.splice(itemId, 1);
														pendingRegisterationData.set($pendingRegisterationData);
													}}
													on:keypress
													class="absolute -top-2 -right-2 bg-dark-focus p-1.5 rounded border border-gray-600"
												>
													<CrossIcon className="w-2 h-2 !stroke-light-2" />
												</button>
											</div>

											{#if $pendingRegisterationData.menu[categoryId].items?.length - 1 === itemId}
												<Button
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

				<Button
					on:click={() => {
						step++;
					}}
					label="Proceed"
					className="w-32 px-6 mx-auto mt-10"
					primary
				>
					Proceed <ArrowRight />
				</Button>
			</div>
		{:else if step === 3}
			<div class="flex flex-col w-full gap-6 mt-14">
				<div class="">
					<TextInput
						maxLength={20}
						label="Choose custom url:"
						trailingAddon="m.saklani.dev/"
						placeholder=""
						on:change={() => {
							if ($page.url.searchParams.get('_id')) return;
							isContinueBtnDisabled = true;
							checkIfSlugIsAlreadyTaken($pendingRegisterationData.slug).then((e) => {
								isSlugTaken = e;
								if (!e) isContinueBtnDisabled = false;
							});
						}}
						error={isSlugTaken}
						bind:value={$pendingRegisterationData.slug}
					/>

					{#if isSlugTaken}
						<div class="text-red-500 text-sm mt-1">Slug is already taken</div>
					{/if}
				</div>

				<SelectDropdown label="Select theme" options={[{ id: 1, value: 'Minimal' }]} />

				<div class="">
					<div class="text-[12px] md:text-xs font-semibold text-light-2 mb-1.5">Preview:</div>
					<div class="qrcode w-full bg-white rounded-md flex items-center justify-center p-6">
						<QrCode bind:codeValue={$pendingRegisterationData.slug} squareSize={400} />
					</div>
				</div>

				<Button
					on:click={() => {
						publishHotel();
					}}
					label="Proceed"
					className="w-32 px-6 mx-auto mt-10"
					primary
					disabled={!$pendingRegisterationData.slug.trim() || isContinueBtnDisabled}
				>
					Proceed <ArrowRight />
				</Button>
			</div>
		{/if}
	</Container>
{:else}
	<LoadingScreenDefault />
{/if}
