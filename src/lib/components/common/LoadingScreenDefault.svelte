<script lang="ts">
	import LoadingIcon from '$lib/icons/LoadingIcon.svelte';
	import { fade } from 'svelte/transition';
</script>

<section
	transition:fade={{ duration: 0.3 }}
	class="fixed inset-0 w-full h-full bg-dark-1 flex items-center justify-center z-20"
>
	<div class="container bg-dark-1 p-3.5 w-fit rounded">
		<LoadingIcon />
	</div>
</section>
