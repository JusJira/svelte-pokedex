<script lang="ts">
	import type { PageData } from './$types';
	import { generations } from './generations';
	import type { IndexMonster } from './+page';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Monster from './Monster.svelte';

	export let data: PageData;

	let searchParams = '';

	let form = {
		searchString: ''
	};

	$: selectedMonsters = data.monsters.filter((monster) => {
		return monster.name.toLowerCase().includes(searchParams.toLowerCase());
	});

	let monsterId: string = $page.url.searchParams.get('monsterId') || '';

	$: monsterId = $page.url.searchParams.get('monsterId') || '';
	$: monster = data.monsters.find((monster) => monster.id === monsterId);
	$: monsterId2 = $page.url.searchParams.get('monsterId2') || '';
	$: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

	$: seletctedGenerationId = $page.url.searchParams.get('generation-id') || '';

	const updateSearchParams = (key: string, value: string) => {
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set(key, value);
		goto(`?${searchParams.toString()}`);
	};

	const submitSearch = (e: Event) => {
		searchParams = form.searchString;
	};
</script>

<div class="flex flex-row flex-wrap justify-center">
	<button
		class="generation-button"
		class:active={seletctedGenerationId == 'all' || seletctedGenerationId == ''}
		on:click={() => updateSearchParams('generation-id', 'all')}
		>All
	</button>
	{#each generations as generation (generation.id)}
		<button
			class="generation-button"
			class:active={seletctedGenerationId === generation.id.toString()}
			on:click={() => updateSearchParams('generation-id', generation.id.toString())}
		>
			{generation.main_region}
		</button>
	{/each}
</div>

<form
	on:submit|preventDefault={submitSearch}
	class="flex items-center justify-center my-4 flex-row gap-1"
>
	<input
		class="rounded-[5px] w-[200px] px-2 py-1 border-2 border-black"
		type="text"
		bind:value={form.searchString}
		placeholder="Pokemon Name"
	/>
	<input
		class="h-full rounded-[5px] px-2 py-1 border-2 border-black"
		type="submit"
		value="Search"
	/>
</form>
<div class="flex flex-row flex-wrap justify-center">
	{#each selectedMonsters as monster, index (monster.id)}
		<Monster {monster} {index} />
	{/each}
</div>

<style lang="postcss">
	.active {
		@apply bg-neutral-800 text-white !important;
	}
	.generation-button {
		@apply m-[10px] px-[10px] py-[5px] bg-[#f9f9f9] text-[#333] border-[1px] border-black hover:bg-[#eee];
	}
</style>
