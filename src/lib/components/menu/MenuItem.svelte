<script lang="ts">
	export let currency: 'INR' | 'USD' = 'INR';

	export let data: {
		name: string;
		description?: string;
		price: string;
	};
</script>

<div class="py-4 text-base">
	<div class="flex items-center justify-between text-gray-100">
		<h2 class="font-semibold">{data.name}</h2>

		<div class="whitespace-nowrap text-sm font-medium italic">
			{#if currency === 'INR'}
				₹
			{:else}
				$
			{/if}
			{data.price}
		</div>
	</div>

	{#if data.description}
		<p class="mt-2.5 text-sm leading-[170%] text-light-2">
			{data.description}
		</p>
	{/if}
</div>
