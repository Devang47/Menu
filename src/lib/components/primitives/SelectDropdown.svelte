<script lang="ts">
	type Option = {
		id: number;
		value: string;
	};
	export let options: Option[] = [];
	export let value: string = options[0].value;
	export let id: string = 'select';
	export let label: string = 'label here:';
</script>

<div class="dropdown-menu">
	<div class="mb-1.5 text-[12px] font-semibold text-light-2">{label}</div>

	<select
		name="select-menu"
		class="relative appearance-none rounded border border-light-3 bg-light-1/10 py-2.5 px-5 !pr-14 outline-none focus:border-highlight"
		{id}
		title={id}
		required
		on:change
		{value}
	>
		{#each options as option, i}
			<option value={option.value} selected={i === 0}>
				{option.value}
			</option>
		{/each}
	</select>
</div>
