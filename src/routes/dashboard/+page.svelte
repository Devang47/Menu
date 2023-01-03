<script>
	import { goto } from '$app/navigation';
	import Heading from '$lib/components/common/Heading.svelte';
	import LoadingScreenDefault from '$lib/components/common/LoadingScreenDefault.svelte';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import QrCode from '$lib/components/QRCode.svelte';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import OptionsIcon from '$lib/icons/OptionsIcon.svelte';
	import Qr from '$lib/icons/Qr.svelte';
	import { cardsByUser, isLoading, user } from '$stores';
	import { getUserHotels } from '$utils/db';
	import { scale } from 'svelte/transition';

	let areCardsLoading = true;
	let qrCodeViewerSlug = '';

	$: if ($user) {
		(async function () {
			await getUserHotels($user.uid);
			areCardsLoading = false;
			isLoading.set(false);
		})();
	}
</script>

{#if $user}
	<Navbar />
	<Container className="mt-32">
		<Heading className="text-center text-[26px] md:text-3xl" text={$user.displayName || ''} />

		<Button className="mx-auto text-xs !py-1 !text-light-2 !px-3 mt-8 rounded-md">Free tier</Button>

		<Card
			noBgImages
			className="rounded md:rounded-lg mt-24 px-4 md:px-5 py-6 md:py-4 border-[#9b9b9b]/10 max-w-sm mx-auto"
		>
			<Heading type="h2" text="Manage cards" className="!text-sm !text-light-2 !font-medium" />

			{#if areCardsLoading}
				<div class="grid gap-3 mt-4 overflow-y-scroll pb-20 h-[250px] relative">
					<div class="mx-auto mt-24 bg-white/5 py-3.5 px-4 rounded-md h-fit">
						<LoadingIcon />
					</div>
				</div>
			{:else if !$cardsByUser.length}{:else}
				<div class="grid gap-3 mt-4 overflow-y-scroll pb-20 h-[250px] relative">
					{#each $cardsByUser as item}
						<div
							class="bg-[#191919]/60 border border-light-4/40 py-3 pl-4 pr-2 rounded-md text-sm flex items-center justify-between gap-4 h-fit"
						>
							<div class="text-light-1 text-ellipsis whitespace-nowrap overflow-hidden font-medium">
								{item.hotel.name}
							</div>

							<div class="flex items-center justify-center gap-2 text-[#969696]">
								<button
									class="px-1 hover:text-[#dddddd]"
									on:click={() => goto(`/h/${item.slug}`, { keepFocus: true })}
								>
									<ExternalLink />
								</button>
								<button
									class="px-1.5 hover:text-[#dddddd]"
									on:click={() => (qrCodeViewerSlug = item.slug)}
								>
									<Qr />
								</button>

								<button class="px-1.5 hover:text-[#dddddd]">
									<OptionsIcon />
								</button>
							</div>
						</div>
					{/each}
				</div>
			{/if}
			<Button on:click={() => goto('/register')} className="mx-auto mt-5">Create new +</Button>
		</Card>
	</Container>
{:else}
	<LoadingScreenDefault />
{/if}

{#if qrCodeViewerSlug}
	<div
		transition:scale={{ start: 0.9, opacity: 0, duration: 200 }}
		class="fixed inset-0 w-full h-full flex items-center justify-center bg-dark-2/80 backdrop-blur"
		on:click|self={() => (qrCodeViewerSlug = '')}
	>
		<div class="bg-white px-8 py-8 rounded-md">
			<QrCode squareSize={200} codeValue={qrCodeViewerSlug} />
		</div>
	</div>
{/if}
