<script lang="ts">
	import type { PageData } from './$types';
	import { generations } from './generations';

	export let data: PageData;
</script>

{#each data.monsters as monster (monster.id)}
	<p>{monster.id}: {monster.name}</p>
{/each}
