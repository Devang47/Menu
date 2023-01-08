<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import TextInput from '$lib/components/primitives/TextInput.svelte';
</script>

<Container className="!max-w-[1200px]">
	<Card
		large
		className="py-20 pb-24 text-center flex items-center justify-center flex-col gap-10 w-full"
	>
		<h1 class="text-[28px] sm:text-4xl font-bold font-neue">Search for a hotel</h1>

		<TextInput divClassName="!max-w-[25rem] mt-4 mx-auto" />
	</Card>
</Container>
