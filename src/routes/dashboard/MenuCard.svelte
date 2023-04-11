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
	import DeleteIcon from '$lib/icons/DeleteIcon.svelte';
	import EditIcon from '$lib/icons/EditIcon.svelte';

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
	class="flex h-fit items-center justify-between gap-4 rounded-md border border-light-4/50 bg-white/10 py-2 pl-4 pr-2 text-sm"
>
	<div
		title={data.hotel.name}
		class="overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium text-light-1"
	>
		{data.hotel.name}
	</div>

	<div class="relative flex items-center justify-center gap-2 text-[#cbcbcb]">
		<button
			{disabled}
			class="custom-border rounded p-1 hover:text-[#dddddd]"
			title="View menu"
			on:click={() => window.open(`/h/${data.slug}`, '_blank')}
		>
			<div class="sr-only">View menu</div>
			<ExternalLink />
		</button>
		<button
			{disabled}
			class="custom-border rounded p-1.5 hover:text-[#dddddd]"
			title="Show qr code"
			on:click={() => (qrCodeViewerSlug = data.slug)}
		>
			<div class="sr-only">Show Qr code</div>
			<Qr />
		</button>

		<button
			{disabled}
			class="custom-border rounded p-1.5 hover:text-[#dddddd]"
			title="Show more options"
			on:click={() => (modalOpen = true)}
		>
			<div class="sr-only">Show more options</div>
			<OptionsIcon />
		</button>

		{#if modalOpen}
			<div
				transition:fly={{ y: -10, opacity: 0, duration: 200 }}
				class="absolute top-7 right-0 z-10 w-[120px] rounded-md border border-light-4/20 bg-white/10 py-1 text-sm shadow-lg backdrop-blur-lg"
				use:clickOutside
				on:click_outside={() => (modalOpen = false)}
			>
				<button
					{disabled}
					on:click={() => {
						goto('/register?_id=' + data.slug);
					}}
					class={clsx(
						'flex w-full items-center justify-start gap-2 px-4 py-2 text-white outline-2 outline-offset-2 hover:bg-white/20 disabled:opacity-50'
					)}
				>
					<EditIcon />
					Edit
				</button>
				<button
					{disabled}
					on:click={deleteCard}
					class={clsx(
						'flex w-full items-center justify-start gap-2 px-4 py-2 text-red-300 outline-2 outline-offset-2 hover:bg-red-300/10 disabled:opacity-50'
					)}
				>
					<DeleteIcon />
					Delete
				</button>
			</div>
		{/if}
	</div>
</div>
