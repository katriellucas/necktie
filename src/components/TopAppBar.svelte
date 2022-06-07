<script lang="ts">
	import AppLogo from './AppLogo.svelte'
	import Sprite from './Sprite.svelte'
	// import HashButton from './buttons/HashButton.svelte'
	import Button from './Button.svelte'

	let pin : string
	let y: number

	function actionPin(y) {
		console.log(y)
		let result;
		if (y > 0) {
			result = true
		} else {
			result = false
		}
		return result;
  }

	$: pin = actionPin(y);
</script>

<svelte:window bind:scrollY={y}/>

<header class="top-app-bar" class:pin>
	<div>
		<AppLogo/>
	</div>
	<div class="nav">
		<!-- <HashButton label="Home" url="#home"/>
		<HashButton label="About me" url="#about"/>
		<HashButton label="Projects" url="#projects"/>
		<HashButton label="Contact" url="#contact"/> -->
		<Button label="Download CV" url="/cv_katriel.pdf"/>
	</div>
</header>

<style lang="sass">
.top-app-bar
	align-items: center
	background: transparent
	display: flex
	height: 64px
	justify-content: space-between
	padding: 0 16px
	position: fixed
	top: 0
	transition: filter .3s, background-color .3s
	width: 100%
	z-index: 1

	@media (min-width: 600px)
		padding: 0 24px

	@media (min-width: 840px)
		padding: 0 32px

	@media (min-width: 1080px)
		padding: 0 64px

.title
	margin-left: 16px

.nav
	display: flex

// - mods

.pin
	background: var(--surface-2)
	filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3))
</style>


