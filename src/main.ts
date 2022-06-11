import './assets/styles/color.sass'
import './assets/styles/reset.sass'
import './assets/styles/ripple.sass'
import './assets/styles/scrollbar.sass'

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
