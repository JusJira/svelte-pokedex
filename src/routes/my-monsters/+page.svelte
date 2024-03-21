<script lang="ts">
    import {caughtMonsters} from '$lib/stores';
    import Monster from '../Monster.svelte';
</script>

<h2 class="text-center text-2xl m-10">My Monsters</h2>

<p>Total : {$caughtMonsters.length} monster(s) caught</p>
<div class="flex flex-row flex-wrap justify-start">
    
    {#each $caughtMonsters as monster,index}
        <Monster {monster} {index} isCaught/>
    {/each}
</div>
{#if $caughtMonsters.length === 0}
        <p class="text-center text-2xl">-- Gotta catch 'em all! --</p>
    {/if}