<script lang="ts">
	export let label: string
	export let target: string = "_self"
	export let url: string

	export let type: 'filled' | 'text'
</script>

{#if url}
	<a href="{url}" target="{target}" rel="noopener" class="button ripple {type}">
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
	border-radius: 20px
	display: inline-flex 
	fill: currentcolor 
	font: 600 14px/20px 'Nunito', sans-serif 
	height: 40px 
	letter-spacing: 0.1px 
	margin-left: 8px 
	padding: 0 24px

// - Types

.filled
	background: var(--primary)
	color: var(--on-primary)

.text
	color: var(--primary)
	padding: 0 16px
</style>
