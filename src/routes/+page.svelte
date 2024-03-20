<script lang="ts">
	import type { PageData } from './$types';
	import { generations } from './generations';

	export let data: PageData;
</script>

<div class="flex flex-row flex-wrap justify-center">
    {#each generations as generation (generation.id)}
    <a class="m-[10px] px-[5px] py-[10px] bg-[#f9f9f9] text-[#333] border-[1px] border-black hover:bg-[#eee]" href="/">{generation.main_region}</a>
    {/each}
</div>

<div class="flex flex-row flex-wrap justify-center">
	{#each data.monsters as monster (monster.id)}
		<div
			class="w-[100px] m-[10px] p-[10px] flex flex-col items-center justify-center relative bg-[#eee] hover:bg-[#ddd]"
		>
			<div>
				<img src={monster.image} alt={monster.name} />
				{monster.name}
			</div>
			<div class="absolute top-2 left-2 text-[#aaa]">
				{monster.id}
			</div>
		</div>
	{/each}
</div>
