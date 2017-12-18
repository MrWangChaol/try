import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Annual from '../components/about/annual/annual.vue'
import Entrust from '../components/about/commission/entrust.vue'
import Replace from '../components/about/replace/replace.vue'
import Break from '../components/about/break.vue'
import Addcar from '../components/presonal/addcar.vue'
import News from '../components/about/news.vue'
import NewsItem from '../components/about/newsitem.vue'
import NewsCar from '../components/about/newscar.vue'
import Emig from '../components/about/emig.vue'
import Outside from '../components/about/outside/outside.vue'
import Regsiter from '../components/about/register/register.vue'
import Driving from '../components/about/driving/driving.vue'
import Mend from '../components/about/mend/mend.vue'
import Ent from '../components/about/ent/ent.vue'
import Grade from '../components/about/grade.vue'
import Serve from '../components/about/serve.vue'
import Insurance from '../components/about/insurance.vue'
import Presonal from '../components/presonal/presonal.vue'
import Order from '../components/presonal/order.vue'
Vue.use(Router)
export default new Router({
  routes: [
  	{
      path: '/order',
      name: 'order',
      component: Order
    },
  	{
      path: '/presonal',
      name: 'presonal',
      component: Presonal
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/a',
      name: 'newscar',
      component:NewsCar
    },
    {
      path: '/entrust',
      name: 'entrust',
      component: Entrust
    },
    {
      path: '/outside',
      name: 'outside',
      component:Outside
    },
    {
      path: '/regsiter',
      name: 'regsiter',
      component: Regsiter
    },
    {
      path: '/replace',
      name: 'replace',
      component: Replace
    },
    {
      path: '/driving',
      name: 'driving',
      component: Driving
    },
    {
      path: '/annual',
      name: 'annual',
      component: Annual
    },
    {
      path: '/break',
      name: 'break',
      component: Break
    },
    {
      path: '/ent',
      name: 'ent',
      component: Ent
    },
    {
      path: '/j',
      name: 'addcar',
      component: Addcar
    },
    {
      path: '/news',
      name: 'news',
      component:News
    },
    {
      path: '/newsitem',
      name: 'newsitem',
      component:NewsItem
    },
     {
      path: '/n',
      name: 'emig',
      component:Emig
    },
    {
      path: '/grade',
      name: 'grade',
      component:Grade
    },
    {
      path: '/p',
      name: 'serve',
      component:Serve
    },
    {
      path: '/mend',
      name: 'mend',
      component:Mend
    },
    {
      path: '/R',
      name: 'insurance',
      component:Insurance
    }  
  ],
   mode:'history'
})
