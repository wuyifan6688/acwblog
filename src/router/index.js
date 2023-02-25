import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView"
import NotFoundView from "../views/NotFoundView"
import RegisterView from "../views/RegisterView"
import UserList from "../views/UserList"
import UserProfile from "../views/UserProfile"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/NotFoundView',
    name: 'NotFoundView',
    component: NotFoundView
  },
  {
    path: '/RegisterView',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/UserList',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: UserProfile
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
