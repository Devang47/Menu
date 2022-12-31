<script>
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
	import CtaButton from './CtaButton.svelte';
	import { user } from '$stores';
</script>

<footer class="flex items-center justify-between py-8 mt-32 w-10/12 max-w-[1200px] mx-auto">
	<div class="flex items-center justify-center gap-4">
		<Logo className="w-10 md:w-12" />
		<h2 class="font-bold hidden md:block text-lg">Menyū</h2>
	</div>

	<div class="flex items-center justify-center gap-5 md:gap-8">
		<GithubIcon className="w-6 md:w-8" />
		<TwitterIcon className="w-6 md:w-8" />

		{#if !$user}
			<CtaButton className="!mix-blend-normal w-20" whiteBg>Sign in</CtaButton>
		{/if}
	</div>
</footer>
