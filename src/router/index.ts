import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import HomeComponent from '../components/home.vue';
import AboutUsComponent from '../components/about-us.vue';
Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home-en-nolink',
        component: HomeComponent
      },
      {
        path: '/',
        name: 'home-vi-nolink',
        component: HomeComponent
      },
      {
        path: '/home',
        name: 'home-en',
        component: HomeComponent
      },
      {
        path: '/trang-chu',
        name: 'home-vi',
        component: HomeComponent
      },
      {
        path: '/about-us',
        name: 'aboutus-en',
        component: AboutUsComponent
      },
      {
        path: '/gioi-thieu',
        name: 'aboutus-vi',
        component: AboutUsComponent
      }
    ]
  })

