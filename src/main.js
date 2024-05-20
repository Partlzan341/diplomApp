import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import AboutCompany from './pages/AboutCompany.vue'
import Contact from './pages/Contact.vue'
import Products from './pages/Products.vue'
import Review from './pages/Review.vue'
import Basket from './pages/Basket.vue'
import ProductDetails from './components/ProductDetails.vue'
import store from './store/store.js' // Импортируйте Vuex-хранилище

const app = createApp(App)
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about-company', name: 'AboutCompany', component: AboutCompany },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/products', name: 'Products', component: Products },
  { path: '/review', name: 'Review', component: Review },
  { path: '/basket', name: 'Basket', component: Basket },
  { path: '/product/:id', component: ProductDetails, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(store) // Используйте Vuex-хранилище
app.use(autoAnimatePlugin)

app.mount('#app')
