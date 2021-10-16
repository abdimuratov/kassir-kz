import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Personal from '../components/Settings/Personal.vue'
import Tickets from '../components/Settings/Tickets.vue'
import Bonuses from '../components/Settings/Bonuses.vue'
import Favourite from '../components/Settings/Favourite.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      children: [
        {
          path: 'personal',
          name: 'Personal',
          component: Personal
        },
        {
          path: 'tickets',
          name: 'Tickets',
          component: Tickets
        },
        {
          path: 'bonuses',
          name: 'Bonuses',
          component: Bonuses
        },
        {
          path: 'favourite',
          name: 'Favourite',
          component: Favourite
        },
      ]
    }
  ]
})
