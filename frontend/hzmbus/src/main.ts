import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style'
import {createPinia} from 'pinia'

const pinia = createPinia()
createApp(App).use(pinia).use(Varlet).mount('#app')