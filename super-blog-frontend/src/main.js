import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(router).mount('#app')
library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)


import "bootstrap/dist/css/bootstrap.css"

import "bootstrap/dist/js/bootstrap.js"
import 'animate.css';
