<script lang="ts">
	export let label : string;
	export let url : string;
</script>

{#if url}
	<a href="{url}" class="button ripple" target="_blank" rel="noopener">
		<span class="label">{label}</span>
	</a>
{:else}
	<button class="button ripple">
		<span class="label">{label}</span>
	</button>
{/if}

<style lang="sass">
.button 
	align-items: center 
	background: var(--primary) 
	border-radius: 20px 
	color: var(--on-primary) 
	display: inline-flex 
	fill: currentcolor 
	font: 600 14px/20px 'Nunito', sans-serif 
	height: 40px 
	letter-spacing: 0.1px 
	margin-left: 8px 
	padding: 0 24px 
</style>