<script lang="ts">
	import { page } from '$app/stores';
	import LoadingScreenDefault from '$lib/components/common/LoadingScreenDefault.svelte';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import MenuItem from '$lib/components/menu/MenuItem.svelte';
	import MenuIcon1 from '$lib/icons/MenuIcon1.svelte';
	import MenuIcon2 from '$lib/icons/MenuIcon2.svelte';
	import { getHotelData } from '$utils/db';
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
			<h2 class="mx-auto mt-3 max-w-xs font-medium text-light-2">{hotelData.hotel.tagline}</h2>
			<!-- <h3 class="text-light-2 font-medium mt-4">Restaurant menu</h3> -->

			<div class="absolute top-48 left-0">
				<MenuIcon1 />
			</div>

			<div class="absolute top-24 right-0">
				<MenuIcon2 />
			</div>
		</div>

		<!-- TODO Sorting menu -->
		<!-- <div class="">
		<SelectDropdown label="Sorting" options={[{
			
		}]} />
    </div> -->

		{#each hotelData.menu as menu, i}
			<div class="mt-4">
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
		background-image: url('https://cdn.raster.app/kitatsu/library-1/oScZSUoQVJ?ixlib=js-3.7.0&width=2813&height=3640&compress=false&blur=374&bri=-8&s=bc8218ec5c490a2477258b0be93b0921');
	}
</style>
