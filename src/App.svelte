<script lang="ts">
  import ExtendedFab from './components/ExtendedFab.svelte'
  import TopAppBar from './components/TopAppBar.svelte'
	
</script>

<TopAppBar/>
<main>
	<div class="banner">
		<div>Hi! My name is</div>
		<h1>Katriel Lucas.</h1>
		<h2>I'm a Front-end Developer.</h2>
		<p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on learning Solidity, for Smart Contract development.</p>
		<div>
			<ExtendedFab label="Contact me"/>
		</div>
	</div>
</main>
<!-- <footer>
	test
</footer> -->

<style lang="sass">
:root
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

h1
	color: var(--on-surface) 
	font-size: clamp(32px, 5vw, 64px)

h2
	color: var(--on-secondary) 
	font-size: clamp(32px, 5vw, 64px)

p
	font: 400 18px/26px 'Nunito', sans-serif 
	max-width: 600px
	width: 100%

main
	align-items: center
	display: flex
	flex-direction: column
	height: 100vh
	justify-content: center
	margin: 0 16px

	@media (min-width: 600px)
		margin: 0 24px

	@media (min-width: 840px)
		margin: 0 32px

	@media (min-width: 1080px)
		margin: 0 64px

.banner
	display: flex
	flex-direction: column
	max-width: 960px
	width: 100%

	// &::before
	// 	background: blue
	// 	content: ''
	// 	height: 50%
	// 	position: absolute
	// 	right: 0
	// 	bottom: 0
	// 	transition: opacity 0.3s
	// 	width: 10%

footer
	height: 100vh
</style>
