<script lang="ts">
	import { onMount } from 'svelte';

	export let codeValue: string;
	export let squareSize: number;

	let qrcode: any;
	let link = `https://m.saklani.dev/h/${codeValue}`;

	onMount(() => {
		let script = document.createElement('script');
		script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
		document.head.append(script);

		script.onload = function () {
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

	$: if (window && window.QRCode && qrcode) {
		qrcode.clear();
		qrcode.makeCode(link);
	}
</script>

<diFv class="flex items-center justify-center flex-col gap-2 -mb-2">
	<div id="qrcode" />
	<div class="text-sm text-black text-center font-medium">{link}</div>
</diFv>

<style lang="postcss">
	#qrcode {
		@apply w-fit h-fit;
	}
</style>
