import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import landing from './views/landing.vue';
import editor from './views/Editor.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
  },


    {
      path: '/',
      name: 'landing',
      component: landing,
    },
    {
      path: '/video',
      name: 'video',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "video" */ './views/Video.vue'),
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    }
  ],
});
