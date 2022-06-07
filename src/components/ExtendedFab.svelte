<script lang="ts">
	export let label : string
</script>

<a href="mailto:katriel.developer@gmail.com" class="extended-fab ripple">
	<span class="label">{label}</span>
</a>

<style lang="sass">
.extended-fab
	align-items: center
	background: var(--primary)
	border-radius: 16px
	color: var(--on-primary)
	display: inline-flex
	fill: currentcolor
	flex-grow: 1
	font: 600 14px/20px 'Nunito', sans-serif
	height: 56px
	letter-spacing: .1px
	margin-top: 48px
	min-width: 80px
	padding: 0 24px
</style>