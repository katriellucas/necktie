<script>
	export let icon;
	export let big;
</script>

<svg viewBox="0 0 24 24" class="icon" class:big >
	<use xlink:href="sprite.svg#{icon}"></use>
</svg>

<style lang="sass">
.icon
	height: 20px
	width: 20px

// mods

.big
	height: 32px
	width: 32px
</style>