<script lang="ts">
	import Header from '$lib/components/register/RegisterHeader.svelte';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Button from '$lib/components/primitives/Button.svelte';
	import Card from '$lib/components/primitives/Card.svelte';
	import GoBack from '$lib/components/primitives/GoBack.svelte';
	import SelectDropdown from '$lib/components/primitives/SelectDropdown.svelte';
	import TextInput from '$lib/components/primitives/TextInput.svelte';
	import ArrowRight from '$lib/icons/ArrowRight.svelte';
	import Logo from '$lib/icons/Logo.svelte';
</script>

<div class="flex items-start justify-start gap-10 py-10 flex-col px-10">
	<Navbar />
	<Header className="mt-12" />

	<Logo />
	<Logo variant="secondary" />

	<Card>
		<div class="h-40 w-60" />
	</Card>

	<TextInput id="testing" className="" label="Placeholder here:" />
	<TextInput id="testing" className="" />
	<TextInput id="testing" className="" isTextarea label="Placeholder here:" />
	<GoBack className="" />
	<Button label="testing" className="w-32 px-6" />
	<Button label="testing" className="w-32 px-6" primary>
		Button <ArrowRight />
	</Button>
	<Button label="testing" className="rounded-[7px]">+</Button>

	<SelectDropdown
		options={[
			{ value: 'first', id: 0 },
			{ value: 'second', id: 1 },
			{ value: 'third', id: 2 }
		]}
	/>
</div>
