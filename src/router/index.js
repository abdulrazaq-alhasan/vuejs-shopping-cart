import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Cart from '../pages/Cart.vue'
import Productdetails from '../pages/Productdetails.vue'






const routes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/details', component: Productdetails },
    { path: '/cart', component: Cart },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router