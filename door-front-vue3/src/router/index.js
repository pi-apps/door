import { createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WidgetsView from '../views/WidgetsView.vue'
import StatsView from '../views/StatsView.vue'
import Top10View from '../views/Top10View.vue'
// import Account8dayView from '../views/Account8dayView.vue'
// import Payment8monthView from '../views/Payment8monthView.vue'
// import Payment8dayTop100View from '../views/Payment8dayTop100View.vue'

import WalletsMigrated from '../components/wallets-migrated.vue';
import Payments8day from '../components/payments8day.vue'
import Top10Expenditure from '../components/top10-expenditure.vue'
import Top10Outnum from '../components/top10-outnum.vue'
import Top10Innum from '../components/top10-innum.vue'
import Top10Income from '../components/top10-income.vue'
import Distribution from '../views/Distribution.vue'

// import { store } from '../store/store.js'
import { useSysStore } from '@/stores/sys'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  // base: "app",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all',
      name: 'all',
      component: WidgetsView
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsView
    },
    {
      path: '/account8day',
      name: 'account8day',
      component: WalletsMigrated
    },
    {
      path: '/top10',
      name: 'top10',
      component: Top10View
    },
    {
      path: '/top10_expenditure',
      name: 'top10_expenditure',
      component: Top10Expenditure
    },
    {
      path: '/top10_outnum',
      name: 'top10_outnum',
      component: Top10Outnum
    },
    {
      path: '/top10_innum',
      name: 'top10_innum',
      component: Top10Innum
    },
    {
      path: '/top10_income',
      name: 'top10_income',
      component: Top10Income
    },

    {
      path: '/payment8day/:address',
      name: 'payment8day',
      component: Payments8day
    },

    {
      path: '/distribution',
      name: 'distribution',
      component: Distribution
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  const store = useSysStore();
  console.log(store.collapse1)
  store.collapse1 = false;
  next();
})


export default router
