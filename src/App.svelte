<script lang="ts">
	import { onMount } from 'svelte'
  import ExtendedFab from './components/ExtendedFab.svelte'
  import TopAppBar from './components/TopAppBar.svelte'

	onMount(() => {
		var section = document.querySelectorAll("section");
		var buttons = document.querySelectorAll("nav > .button.text");

		function checkTab() {
			var screen_position = window.scrollY;

			for (let i = 0; i < section.length; i++) {
				if (screen_position >= section[i].offsetTop) {
					for (let button of buttons) {
						button.classList.remove('active')
					}
					buttons[i].classList.add('active')
				}
			}
		}
		window.addEventListener("scroll", checkTab)
	});
	
</script>

<TopAppBar/>
<main>
	<section id="home">
		<div class="banner">
			<div class="u-primary">Hi! My name is</div>
			<h1>Katriel Lucas.</h1>
			<h2>I'm a Front-end Developer.</h2>
			<p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on learning Solidity, for Smart Contract development.</p>
			<div>
				<ExtendedFab label="Contact me"/>
			</div>
		</div>
	</section>
	<!-- <section id="what-i-do">
		111111111111111
	</section> -->
</main>
<!-- <footer>
	test
</footer> -->

<style lang="sass">

// - Sections

#home
	align-items: center
	display: flex
	flex-direction: column
	height: 100vh
	justify-content: center

h1
	color: var(--on-surface) 
	font-size: clamp(32px, 5vw, 64px)

h2
	color: var(--on-surface-alt) 
	font-size: clamp(32px, 5vw, 64px)

p
	color: var(--on-surface-alt) 
	font: 400 18px/26px 'Nunito', sans-serif 
	max-width: 600px
	width: 100%

main
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

.u-primary
	color: var(--primary) 

</style>
