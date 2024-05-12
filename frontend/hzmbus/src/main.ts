import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style'
import {createPinia} from 'pinia'
import router from '@/router/Index'
const pinia = createPinia()
createApp(App).use(router).use(pinia).use(Varlet).mount('#app')