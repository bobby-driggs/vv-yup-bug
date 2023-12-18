import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'primeicons/primeicons.css'
import './assets/tailwind.main.css'
import './assets/theme.css'

import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
app.use(ToastService)
app.use(ConfirmationService)
app.directive('tooltip', Tooltip)
app.use(router)
app.use(PrimeVue)

app.mount('#app')
