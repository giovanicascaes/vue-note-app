import Vue from 'vue';
import Router from 'vue-router';

import Main from './views/Main.vue';
import Note from './views/Note.vue';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/not-found', component: NotFound },
    {
      path: '/',
      component: Main,
      children: [
        { path: '', component: Home },
        {
          path: 'note/:note_hash',
          component: Note,
        },
      ],
    },
    { path: '*', redirect: '/not-found' },
  ],
});
