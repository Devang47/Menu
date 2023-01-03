<script lang="ts">
	import { onMount } from 'svelte';

	export let codeValue: string;
	export let squareSize: number;

	let qrcode: any;

	onMount(() => {
		let script = document.createElement('script');
		script.src = 'https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js';
		document.head.append(script);

		script.onload = function () {
			qrcode = new QRCode('qrcode', {
				text: `https://m.saklani.dev/${codeValue}`,
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
		qrcode.makeCode(codeValue);
	}
</script>

<diFv class="flex items-center justify-center flex-col gap-2 -mb-2">
	<div id="qrcode" />
	<div class="text-sm text-black text-center font-medium">
		https://m.saklani.dev/{codeValue}
	</div>
</diFv>

<style lang="postcss">
	#qrcode {
		@apply w-fit h-fit;
	}
</style>
