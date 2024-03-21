<script>
	import '../app.css';

	import { page } from '$app/stores';
</script>

<div class="flex flex-row justify-between items-center bg-neutral-800 text-white h-12 px-10">
	<a class="hover:text-neutral-300 p-1" class:active={$page.url.pathname === '/'} href="/"> Home </a>
	<a
		class="hover:text-neutral-300 p-1"
		class:active={$page.url.pathname === '/my-monsters'}
		href="/my-monsters"
	>
		My Monsters
	</a>
</div>

<div class="container">
	<slot />
</div>

<style lang='postcss'>
    .active {
        @apply border-[1px] border-neutral-300 rounded-md
    }

</style>
