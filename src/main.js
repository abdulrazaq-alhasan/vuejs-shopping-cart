import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// Bootstrap
import '../node_modules/bootstrap/dist/css/Bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/Bootstrap.min.js'

// Bootstrap Icons
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';



const app = createApp(App)
app.use(pinia);
app.use(router)
app.mount('#app')
