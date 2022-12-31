<script>
	import Container from '$lib/components/layout/Container.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import TextInput from '$lib/components/primitives/TextInput.svelte';
</script>

<Container>
	<Card className="mt-80 py-20 text-center flex items-center justify-center flex-col gap-10">
		<h1 class="text-3xl font-bold font-neue">Search for a hotel</h1>

		<TextInput />
	</Card>
</Container>
