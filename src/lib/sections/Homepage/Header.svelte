<script lang="ts">
	import CtaButton from '$lib/components/common/CtaButton.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import SelectDropdown from '$lib/components/primitives/SelectDropdown.svelte';
	import TextInput from '$lib/components/primitives/TextInput.svelte';
	import HeaderRect from '$lib/icons/HeaderRect.svelte';
	import HeaderRect2 from '$lib/icons/HeaderRect2.svelte';
	import TempQr from '$lib/icons/TempQr.svelte';
</script>

<header>
	<h1
		class="text-center text-light-2 font-extrabold text-[40px] sm:text-[60px] md:text-[70px] lg:text-[76px] xl:text-[85px] lg:w-8/12 max-w-3xl pb-16 w-10/12 mx-auto selection:bg-light-1 selection:bg-opacity-20"
	>
		<span class="mix-blend-color-dodge"> Create a online menu for your </span>
		<span class="mix-blend-normal text-white "> restaurant </span>
	</h1>

	<div class="flex flex-col sm:flex-row gap-6 sm:gap-12 text-center justify-center">
		<CtaButton uppercase>Login</CtaButton>
		<CtaButton uppercase whiteBg>Sign up</CtaButton>
	</div>

	<Card
		noBgImages
		className="!absolute top-[500px] sm:top-auto sm:bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-fit backdrop-blur-[44px] py-8 px-10"
	>
		<TempQr className="w-36" />
	</Card>

	<HeaderRect
		className="absolute right-0 bottom-0 w-24 md:w-32 lg:w-48 xl:w-56 h-fit mix-blend-color-dodge"
	/>
	<HeaderRect2
		className="absolute left-0 bottom-0 w-24 md:w-32 lg:w-48 xl:w-56 h-fit mix-blend-color-dodge"
	/>
</header>

<style lang="postcss">
	header {
		background-image: url('https://cdn.raster.app/kitatsu/library-1/46WNodbDbh?ixlib=js-3.6.0&height=3992&width=2246&blur=360&compress=false&shad=6&con=27&gam=-3&fm=webp&s=ce56c801fba8ae40a0d8afd5d18b70ec');
		background-attachment: fixed;
		@apply bg-center bg-cover text-light-2 min-h-[500px] h-[500px] sm:min-h-[550px] md:h-[600px] py-32 pb-52 flex flex-col items-center justify-center relative;
		font-family: neue-montreal;

		box-shadow: 0px 2.8px 2.2px rgba(0, 0, 0, 0.048), 0px 6.8px 5.3px rgba(0, 0, 0, 0.069),
			0px 12.8px 10px rgba(0, 0, 0, 0.085), 0px 22.8px 17.9px rgba(0, 0, 0, 0.101),
			0px 42.6px 33.4px rgba(0, 0, 0, 0.122), 0px 102px 80px rgba(0, 0, 0, 0.17);
	}

	h1 {
		@apply leading-[110%] font-extrabold;
		letter-spacing: -2px;
	}
</style>
