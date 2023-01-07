<script>
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
	import CtaButton from './CtaButton.svelte';
	import { user } from '$stores';
	import { signInWithGoogle } from '$utils/auth';
</script>

<footer class="flex items-center justify-between py-8 mt-32 px-6 max-w-[1200px] mx-auto">
	<a href="/#">
		<div class="flex items-center justify-center gap-4">
			<Logo className="w-10 md:w-12" />
			<h2 class="font-bold hidden md:block text-lg">Menyū</h2>
		</div>
	</a>

	<div class="flex items-center justify-center gap-6 md:gap-8">
		<a href="https://github.com/Devang47/Menyu" target="_blank" rel="noopener noreferrer">
			<GithubIcon className="w-5 md:w-6" />
		</a>
		<a href="https://twitter.com/DevangSaklani" target="_blank" rel="noopener noreferrer">
			<TwitterIcon className="w-5 md:w-6" />
		</a>

		{#if !$user}
			<CtaButton className="!mix-blend-normal w-20" whiteBg on:click={signInWithGoogle}
				>Sign in</CtaButton
			>
		{/if}
	</div>
</footer>
