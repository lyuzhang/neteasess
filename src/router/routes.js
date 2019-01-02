/**
 * Created by DeLL on 2018/12/28.
 */
import Hpage from '../views/Hpage/Hpage.vue'
import Sort from '../views/Sort/Sort.vue'
import See from '../views/See/See.vue'
import Scart from '../views/Scart/Scart.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'
import HpageHotSearch from '../views/HpageHotSearch/HpageHotSearch.vue'
export default [
  {
    path:'/',
    redirect:'/Hpage',
    meta: {
      showFooter: true
    }
  },
  {
    path:'/Hpage',
    component:Hpage,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/See',
    component:See,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/Sort',
    component:Sort,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/Scart',
    component:Scart,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/Profile',
    component:Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/HpageHotSearch',
    component:HpageHotSearch
  }
]
