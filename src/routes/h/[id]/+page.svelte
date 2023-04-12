<script lang="ts">
	import { page } from '$app/stores';
	import LoadingScreenDefault from '$lib/components/common/LoadingScreenDefault.svelte';
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import MenuItem from '$lib/components/menu/MenuItem.svelte';
	import MenuIcon1 from '$lib/icons/MenuIcon1.svelte';
	import MenuIcon2 from '$lib/icons/MenuIcon2.svelte';
	import { getHotelData, recordPageVisit } from '$utils/db';
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	let hotelData: RegisterationData;

	let notFound = false;
	let isLoading = true;

	onMount(() => {
		const id = $page.params.id;

		const getHotelDataQ = async () => {
			try {
				let data = await getHotelData(id);

				hotelData = data as RegisterationData;
				isLoading = false;

				recordPageVisit(id);
			} catch (e) {
				notFound = true;
				isLoading = false;
			}
		};
		getHotelDataQ();
	});
</script>

{#if isLoading}
	<LoadingScreenDefault />
{:else if notFound}
	<h1 class="text-center text-3xl">404 - not found</h1>
{:else if hotelData.hotel.name}
	<Navbar />

	<Container className="mt-32">
		<div class="relative h-80 text-center font-neue">
			<h1 class="text-[32px] font-bold">{hotelData.hotel.name}</h1>
			<h2 class="mx-auto mt-3 max-w-xs font-medium text-light-2">{hotelData.hotel.description}</h2>

			<div class="mt-6 flex items-center justify-center gap-2">
				<svg
					class="w-3 fill-light-2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					role="img"
					><title>Gmail</title><path
						d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
					/></svg
				>
				<h3 class="text-sm font-medium text-light-2">{hotelData.hotel.email}</h3>
			</div>
			{#if hotelData.hotel.number}
				<div class="mt-2 flex items-center justify-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 text-light-2" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M4.05 21q-.25 0-.525-.013T3 20.95V15.1l5-1l2.9 2.9q1.9-1.15 3.488-2.725t2.637-3.375l-2.85-2.875L15.1 3h5.85q.05.25.05.525v.525q0 3.225-1.437 6.288t-3.8 5.437q-2.363 2.375-5.425 3.8T4.05 21Z"
						/></svg
					>

					<h3 class="text-sm font-medium text-light-2">{hotelData.hotel.number}</h3>
				</div>
			{/if}

			<div class="absolute top-56 left-0">
				<MenuIcon1 />
			</div>

			<div class="absolute top-32 right-0">
				<MenuIcon2 />
			</div>
		</div>

		<!-- TODO Sorting menu -->
		<!-- <div class="">
		<SelectDropdown label="Sorting" options={[{
			
		}]} />
    </div> -->

		{#each hotelData.menu as menu, i}
			<div class="mt-8">
				<h2 class={clsx('category-title font-neue font-bold', i > 0 && 'mt-10')}>
					{menu.category}
				</h2>
				<div class="mt-6">
					{#each menu.items as menuItem}
						<MenuItem currency={hotelData.currency} data={menuItem} />
					{/each}
				</div>
			</div>
		{/each}
	</Container>
{/if}

<style lang="postcss">
	h1 {
		@apply relative mx-auto w-fit;
	}

	h1::after {
		content: '';
		position: absolute;
		left: -12px;
		top: -3px;
		height: 13px;
		width: 13px;
		border-top: 2px solid rgb(150 150 150);
		border-left: 2px solid rgb(150 150 150);
	}

	h1::before {
		content: '';
		position: absolute;
		right: -12px;
		bottom: -3px;
		height: 13px;
		width: 13px;
		border-bottom: 2px solid rgb(150 150 150);
		border-right: 2px solid rgb(150 150 150);
	}

	.category-title {
		@apply relative w-fit text-2xl;
	}

	.category-title::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		height: 2.5px;
		width: 60%;
		background-color: rgb(150 150 150);
	}

	:global(html) {
		background-image: url('https://cdn.raster.app/kitatsu/library-1/oScZSUoQVJ?ixlib=js-3.7.0&width=2813&height=3640&compress=false&blur=374&bri=-8&fm=webp&q=30&s=5ee3f94d8f06ab702cf40220c12ffbd4');
	}
</style>
