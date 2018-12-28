/**
 * Created by DeLL on 2018/12/28.
 */
import Hpage from '../views/Hpage/Hpage.vue'
import Sort from '../views/Sort/Sort.vue'
import See from '../views/See/See.vue'
import Scart from '../views/Scart/Scart.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'
export default [
  {
    path:'/',
    redirect:'/Hpage'
  },
  {
    path:'/Hpage',
    component:Hpage
  },
  {
    path:'/See',
    component:See
  },
  {
    path:'/Sort',
    component:Sort
  },
  {
    path:'/Scart',
    component:Scart
  },
  {
    path:'/Profile',
    component:Profile
  },
  {
    path:'/Login',
    component:Login
  },
]
