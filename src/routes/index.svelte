<script lang="ts">
	import Container from 'src/components/container.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('mounted');
	});
</script>

<Container>
	<div />
</Container>
