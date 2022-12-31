<script>
	import { goto } from '$app/navigation';
	import Heading from '$lib/components/common/Heading.svelte';
	import LoadingScreenDefault from '$lib/components/common/LoadingScreenDefault.svelte';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import OptionsIcon from '$lib/icons/OptionsIcon.svelte';
	import { user } from '$stores';


</script>

{#if $user}
	<Navbar />
	<Container className="mt-32">
		<Heading className="text-center text-[26px] md:text-3xl" text={$user.displayName || ''} />

		<Button className="mx-auto text-xs !py-1 !text-light-2 !px-3 mt-4 rounded-md">Free tier</Button>

		<Card
			noBgImages
			className="rounded md:rounded-lg mt-24 px-4 md:px-5 py-6 md:py-4 border-[#6B6B6B]/10 max-w-sm mx-auto"
		>
			<Heading type="h2" text="Manage cards" className="!text-sm !text-light-2 !font-medium" />

			<div class="grid gap-3 mt-4 overflow-y-scroll pb-20 h-[250px] relative">
				<button
					class="bg-[#191919]/60 border-2 border-[#808080]/20 py-3 px-4 rounded-md text-sm flex items-center justify-between gap-4 h-fit"
				>
					<div class="text-light-2">The Taj Hotel</div>

					<div class="">
						<OptionsIcon />
					</div>
				</button>
			</div>
			<Button
				on:click={() => {
					goto('/register');
				}}
				className="mx-auto mt-5">Create new</Button
			>
		</Card>
	</Container>
{:else}
	<LoadingScreenDefault />
{/if}
