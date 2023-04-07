<script lang="ts">
	import { goto } from '$app/navigation';
	import CtaButton from '$lib/components/common/CtaButton.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import HeaderRect from '$lib/icons/HeaderRect.svelte';
	import HeaderRect2 from '$lib/icons/HeaderRect2.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import Pear from '$lib/icons/Pear.svelte';
	import TempQr from '$lib/icons/TempQr.svelte';
	import { user } from '$stores';
	import { signInWithGoogle } from '$utils/auth';
</script>

<header>
	<div class="absolute top-2 right-2 md:top-5 md:right-6">
		<Pear />
	</div>

	<nav class="mx-auto flex w-full max-w-[1200px] items-center gap-3 px-6 py-4 md:gap-5 md:py-8">
		<Logo className="w-8 md:w-10" variant="primary" />
		<span class="font-semibold text-light-1 md:text-lg"> Menyū </span>
	</nav>

	<h1
		class="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center text-[46px] font-extrabold text-[#ABABAB] selection:bg-light-1 selection:bg-opacity-20 sm:text-[60px] md:text-[70px] lg:w-8/12 lg:text-[76px] xl:text-[85px]"
	>
		<span class="mix-blend-color-dodge"> Create a online menu for your </span>
		<span class="text-white mix-blend-normal"> restaurant </span>
	</h1>

	<div class="flex w-40 flex-col justify-center gap-6 text-center sm:w-fit sm:flex-row sm:gap-12">
		{#if $user}
			<CtaButton
				on:click={() => goto('/dashboard')}
				uppercase
				whiteBg
				className="whitespace-nowrap !max-w-none !w-fit">Dashboard -></CtaButton
			>
		{:else}
			<CtaButton on:click={signInWithGoogle} uppercase>Login</CtaButton>
			<a href="/login">
				<CtaButton uppercase whiteBg>Sign up</CtaButton>
			</a>
		{/if}
	</div>

	<HeaderRect
		className="absolute right-0 bottom-0 w-24 md:w-32 lg:w-48 xl:w-56 h-fit mix-blend-color-dodge"
	/>
	<HeaderRect2
		className="absolute left-0 bottom-0 w-24 md:w-32 lg:w-48 xl:w-56 h-fit mix-blend-color-dodge"
	/>
</header>

<Card
	noBgImages
	className="w-fit h-fit backdrop-blur-[30px] !py-10 !px-10 mx-auto mt-32 sm:-mt-28 mb-32 sm:py-2 sm:px-10"
>
	<TempQr className="w-28 sm:w-36" />
</Card>

<style lang="postcss">
	header {
		background-image: url('https://cdn.raster.app/kitatsu/library-1/vQIsc0ug2a?ixlib=js-3.7.0&height=1500&width=3514&compress=false&blur=400&sat=40&s=8139f86cf2d1ea97cdc01aec9821fe0f');
		@apply relative flex flex-col items-center justify-center bg-cover bg-center pb-32 text-light-2 sm:pb-48 md:bg-fixed;
		font-family: neue-montreal;

		box-shadow: 0px 2.8px 2.2px rgba(0, 0, 0, 0.048), 0px 6.8px 5.3px rgba(0, 0, 0, 0.069),
			0px 12.8px 10px rgba(0, 0, 0, 0.085), 0px 22.8px 17.9px rgba(0, 0, 0, 0.101),
			0px 42.6px 33.4px rgba(0, 0, 0, 0.122), 0px 102px 80px rgba(0, 0, 0, 0.17);
	}

	h1 {
		@apply mx-auto max-w-[350px] font-extrabold leading-[110%] sm:max-w-md md:max-w-[1200px];
		letter-spacing: -1px;
	}
</style>
