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

<SvelteSeo
	title="Menyú"
	description="At Menyú you can create a private chat room and share data across multiple devices, the chat room will automatically delete after 15min.."
	openGraph={{
		type: 'website',
		title: 'Menyú',
		description:
			'At Menyú you can create a private chat room and share data across multiple devices, the chat room will automatically delete after 15min.',
		url: 'https://saklani.dev',
		images: [
			{
				url: 'https://res.cloudinary.com/dyn3sdtfm/image/upload/v1663470958/og1_l965qv.webp'
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@devangsaklani',
		title: 'Devang Saklani | Software Engineer',
		description:
			'At Menyú you can create a private chat room and share data across multiple devices, the chat room will automatically delete after 15min.',
		image: 'https://res.cloudinary.com/dyn3sdtfm/image/upload/v1663470958/og1_l965qv.webp',
		imageAlt: 'Devang Saklani | Software Engineer'
	}}
/>

<slot />
<Footer />
