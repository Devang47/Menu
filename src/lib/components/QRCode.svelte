<script lang="ts">
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	export let codeValue: string;
	export let squareSize: number;

	let qrcode: any;
	let link: string;
	let loading = true;

	$: link = `https://m.saklani.dev/h/${codeValue}`;

	onMount(() => {
		if (window.QRCode) {
			loading = false;
			qrcode = new QRCode('qrcode', {
				text: link,
				width: squareSize,
				height: squareSize,
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: QRCode.CorrectLevel.H
			});
			return;
		}

		let script = document.createElement('script');
		script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
		document.head.append(script);

		script.onload = function () {
			loading = false;
			qrcode = new QRCode('qrcode', {
				text: link,
				width: squareSize,
				height: squareSize,
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: QRCode.CorrectLevel.H
			});
		};
	});

	$: if (window && window.QRCode && qrcode && codeValue) {
		qrcode.clear();
		qrcode.makeCode(link);
	}
</script>

<div class="-mb-2 flex w-full flex-col items-center justify-center gap-2">
	{#if loading}
		<div
			class={clsx(
				'flex items-center justify-center rounded-md border border-dashed border-gray-800',
				`h-[${squareSize}px] w-[${squareSize}px]`
			)}
			style="height: {squareSize}px; width: {squareSize}px;"
		>
			<LoadingIcon />
		</div>
	{/if}
	<div class={clsx(loading && 'hidden')} id="qrcode" />

	<div
		class="mt-2 w-full whitespace-pre-wrap break-words text-center text-sm font-medium text-black"
	>
		{link}
	</div>
</div>

<style lang="postcss">
	#qrcode {
		@apply h-fit w-fit;
	}
</style>
