<script lang="ts">
	import { goto } from '$app/navigation';
	import ExternalLink from '$lib/icons/ExternalLink.svelte';
	import OptionsIcon from '$lib/icons/OptionsIcon.svelte';
	import Qr from '$lib/icons/Qr.svelte';
	import { clickOutside } from '$lib/hooks/useClickOutside';
	import { fly, scale } from 'svelte/transition';
	import { deleteHotelMenu } from '$utils/db';
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import { isLoading } from '$stores';

	let modalOpen = false;
	let disabled = false;

	let dispatcher = createEventDispatcher();

	const deleteCard = async () => {
		modalOpen = false;
		const result = confirm('Do you want to clear all fields?');
		if (!result) return;
		disabled = true;
		await deleteHotelMenu(data.slug);
		dispatcher('delete', { slug: data.slug });
		disabled = false;
	};

	export let data: RegisterationData;
	export let qrCodeViewerSlug: string;
</script>

<div
	class="flex h-fit items-center justify-between gap-4 rounded-md border border-light-4/40 bg-[#191919]/60 py-3 pl-4 pr-2 text-sm"
>
	<div class="overflow-hidden text-ellipsis whitespace-nowrap font-medium text-light-1">
		{data.hotel.name}
	</div>

	<div class="relative flex items-center justify-center gap-2 text-[#969696]">
		<button
			{disabled}
			class="px-1 hover:text-[#dddddd]"
			on:click={() => window.open(`/h/${data.slug}`, '_blank')}
		>
			<ExternalLink />
		</button>
		<button
			{disabled}
			class="px-1.5 hover:text-[#dddddd]"
			on:click={() => (qrCodeViewerSlug = data.slug)}
		>
			<Qr />
		</button>

		<button {disabled} class="px-1.5 hover:text-[#dddddd]" on:click={() => (modalOpen = true)}>
			<OptionsIcon />
		</button>

		{#if modalOpen}
			<div
				transition:fly={{ y: -10, opacity: 0, duration: 200 }}
				class="absolute top-7 right-0 z-10 w-20 overflow-hidden rounded-md border border-light-4/20 bg-dark-1 shadow-lg"
				use:clickOutside
				on:click_outside={() => (modalOpen = false)}
			>
				<button
					{disabled}
					on:click={deleteCard}
					class={clsx('w-full bg-red-600 px-3 py-2 text-sm text-white/80 disabled:opacity-50')}
				>
					Delete
				</button>
			</div>
		{/if}
	</div>
</div>
