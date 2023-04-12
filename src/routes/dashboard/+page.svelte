<script lang="ts">
	import { goto } from '$app/navigation';
	import Heading from '$lib/components/common/Heading.svelte';
	import LoadingScreenDefault from '$lib/components/common/LoadingScreenDefault.svelte';
	import Navbar from '$lib/components/common/Navbar.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import QrCode from '$lib/components/QRCode.svelte';
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import { analyticsPopupOpen, cardsByUser, isLoading, user } from '$stores';
	import { getUserHotels } from '$utils/db';
	import { fade, scale } from 'svelte/transition';
	import MenuCard from './MenuCard.svelte';
	import { onMount } from 'svelte';
	import Popup from '$lib/components/common/Popup.svelte';

	let areCardsLoading = true;
	let qrCodeViewerSlug = '';

	$: if ($user) {
		(async function () {
			await getUserHotels($user.uid);
			areCardsLoading = false;
			isLoading.set(false);
		})();
	}

	const handleDeleteSlug = (data: CustomEvent) => {
		$cardsByUser = $cardsByUser.filter((e) => e.slug !== data.detail.slug);
	};

	onMount(() => {
		window.onbeforeunload = null;
		window.onhashchange = null;
	});
</script>

{#if $user}
	<Navbar />
	<Container className="mt-32">
		<div class="text-center text-sm text-light-2">Welcome</div>

		<Heading className="text-center text-[26px] md:text-3xl mt-2" text={$user.displayName || ''} />

		<Button className="mx-auto text-xs !py-1 !text-light-2 !px-3 mt-8 rounded-md">Free tier</Button>

		<Card
			noBgImages
			className="rounded md:rounded-lg mt-24 px-4 md:px-5 py-6 md:py-4 border-white/10 max-w-sm mx-auto"
		>
			<Heading type="h2" text="Manage cards" className="!text-sm !text-light-1/80 !font-medium" />

			{#if areCardsLoading}
				<div class="relative mt-4 grid h-[250px] gap-3 overflow-y-scroll pb-20">
					<div class="mx-auto mt-24 h-fit rounded-md bg-white/10 py-3.5 px-4">
						<LoadingIcon />
					</div>
				</div>
			{:else if $cardsByUser.length > 0}
				<div class="relative mt-4 flex h-[250px] flex-col gap-3 overflow-y-scroll pb-20">
					{#each $cardsByUser as item}
						<MenuCard on:delete={handleDeleteSlug} bind:qrCodeViewerSlug data={item} />
					{/each}
				</div>
			{:else}
				<div class="relative mt-4 grid h-[250px] gap-3 overflow-y-scroll pb-20">
					<div class="mx-auto mt-24 text-center text-sm">Not cards found</div>
				</div>
			{/if}

			<Button on:click={() => goto('/register')} className="mx-auto mt-5">Create new +</Button>
		</Card>
	</Container>
{:else}
	<LoadingScreenDefault />
{/if}

{#if qrCodeViewerSlug}
	{#key qrCodeViewerSlug}
		<div
			transition:fade={{ duration: 200 }}
			class="fixed inset-0 flex h-full w-full items-center justify-center bg-dark-2/60 backdrop-blur"
			on:click|self={() => (qrCodeViewerSlug = '')}
			on:keypress|self={() => (qrCodeViewerSlug = '')}
		>
			<div
				transition:scale={{ start: 0.8, opacity: 0, duration: 200 }}
				class="rounded-md bg-white px-8 py-8"
			>
				<QrCode squareSize={200} bind:codeValue={qrCodeViewerSlug} />
			</div>
		</div>
	{/key}
{/if}

{#if $analyticsPopupOpen}
	<Popup />
{/if}

<style lang="postcss">
	:global(html) {
		background-image: url('https://cdn.raster.app/kitatsu/library-1/oScZSUoQVJ?ixlib=js-3.7.0&width=2813&height=3640&compress=false&blur=374&bri=-8&fm=webp&q=30&s=5ee3f94d8f06ab702cf40220c12ffbd4');
	}
</style>
