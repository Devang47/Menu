<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteSeo from 'svelte-seo';
	import LoadingScreen from '$lib/components/common/LoadingScreenDefault.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import Notifications from '$lib/components/common/Notifications/index.svelte';
	import { isLoading } from '$stores';
	import { getCurrentUser } from '$utils/auth';
	import '$styles/global.scss';

	onMount(() => {
		getCurrentUser();
	});
</script>

<Notifications />

{#if $isLoading}
	<LoadingScreen />
{/if}

<svelte:head>
	<meta
		name="viewport"
		content="width=device-width, height=device-height, initial-scale=1, shrink-to-fit=no"
	/>
	<meta name="theme-color" content={'#000000'} />
	<link rel="icon" href="/icons/favicon.png" type="image/png" />
	<link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
</svelte:head>

<SvelteSeo
	title="Menyú"
	description="Create a online menu for your store."
	openGraph={{
		type: 'website',
		title: 'Menyú',
		description: 'Create online menu for your store.',
		url: 'https://menyu.saklani.dev/',
		images: [
			{
				url: 'https://cdn.raster.app/kitatsu/library-1/u1aTjOKgN7?ixlib=js-3.7.0&s=096a62a63023c43c9cb22d28e11de43d',
				alt: 'Menyu | Create a online menu for your store.'
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@devangsaklani',
		title: 'Devang Saklani | Software Engineer',
		description:
			'At Menyú you can create a private chat room and share data across multiple devices, the chat room will automatically delete after 15min.',
		image:
			'https://cdn.raster.app/kitatsu/library-1/u1aTjOKgN7?ixlib=js-3.7.0&s=096a62a63023c43c9cb22d28e11de43d',
		imageAlt: 'Devang Saklani | Software Engineer'
	}}
/>

<slot />
<Footer />
