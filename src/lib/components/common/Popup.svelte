<script lang="ts">
	import { clickOutside } from '$lib/hooks/useClickOutside';
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import { analyticsPopupOpen } from '$stores';
	import { getHotelData } from '$utils/db';
	import type { DocumentData } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	let analyticsData: DocumentData;
	onMount(async () => {
		if (!$analyticsPopupOpen) return;

		analyticsData = await getHotelData($analyticsPopupOpen);
		console.log(analyticsData);
	});
</script>

<section
	transition:fade={{ duration: 150 }}
	class="fixed inset-0 z-10 flex h-screen w-full items-center justify-center bg-black/70 text-center backdrop-blur"
>
	<div
		transition:scale={{ duration: 100, opacity: 0.7, start: 0.9 }}
		use:clickOutside
		on:click_outside={() => {
			$analyticsPopupOpen = null;
		}}
		class="flex h-fit w-full max-w-lg items-center justify-center rounded-lg bg-white/10 p-10"
	>
		{#if !analyticsData}
			<LoadingIcon />
		{:else}
			<table class="rounded-md border border-white bg-white/10 text-left text-white" border={1}>
				<tr class="border-b border-white">
					<td class="border-r border-white text-white/70">Total visits</td>
					<td>{analyticsData.visits}</td>
				</tr>

				<tr>
					<td class="whitespace-nowrap border-r border-white text-white/70">Last visit on</td>
					<td>{analyticsData.lastVisitedOn.toDate()}</td>
				</tr>

				{#if analyticsData?.createdOn}
					<tr>
						<td class="whitespace-nowrap border-r border-white text-white/70">Created on</td>
						<td>{analyticsData?.createdOn.toDate()}</td>
					</tr>
				{/if}
			</table>
		{/if}
	</div>
</section>

<style lang="postcss">
	td {
		@apply px-3 py-1;
	}
</style>
