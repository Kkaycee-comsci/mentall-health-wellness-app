import { createRouter, createWebHistory } from 'vue-router'

// Update these lines to match your actual filenames from the screenshot:
import Home from '../views/HomeView.vue'
import Breathing from '../views/BreathingView.vue'
import Wellness from '../views/Wellness.vue'
import AiSupport from '../views/AiSupport.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/breathing', component: Breathing },
  { path: '/wellness', component: Wellness },
  { path: '/ai-support', component: AiSupport },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
