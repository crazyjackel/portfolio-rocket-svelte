<script>
	import Header from '$components/layout/header.svelte';
	import Projects from '$components/layout/projects.svelte';
</script>

<Header></Header>
<main id="content" tabindex="-1">
	<slot />
</main>

<style>
	:global(body){
		background-color: #4d575F;
		margin: 0px;
	}
</style>