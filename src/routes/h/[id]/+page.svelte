<script lang="ts">
	import { page } from '$app/stores';
	import LoadingScreenDefault from '$lib/components/common/LoadingScreenDefault.svelte';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import MenuItem from '$lib/components/menu/MenuItem.svelte';
	import MenuIcon1 from '$lib/icons/MenuIcon1.svelte';
	import MenuIcon2 from '$lib/icons/MenuIcon2.svelte';
	import { getHotelData } from '$utils/db';
	import { onMount } from 'svelte';

	let hotelData: RegisterationData;

	let notFound = false;
	let isLoading = true;

	onMount(() => {
		const id = $page.params.id;

		const getHotelDataQ = async () => {
			try {
				let data = await getHotelData(id);
				console.log({ data });

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
		<div class="relative text-center font-neue h-80">
			<h1 class="text-[32px] font-bold">{hotelData.hotel.name}</h1>
			<h2 class="text-light-2 font-medium mt-3 max-w-xs mx-auto">{hotelData.hotel.tagline}</h2>
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

		{#each hotelData.menu as menu}
			<div class="mt-4">
				<h2 class="category-title font-bold font-neue">{menu.category}</h2>
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
		@apply relative w-fit mx-auto;
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
		@apply relative text-xl w-fit;
	}

	.category-title::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		height: 2.5px;
		width: 70%;
		background-color: rgb(150 150 150);
	}
</style>
