import {createRouter, createWebHistory} from 'vue-router';

import Home from './src/pages/Home';
import Heroes from './src/pages/Heroes';
import Calendar from './src/pages/Calendar';


const routes = [
  {path: '/', component:Home},
  {path: '/heroes', component:Heroes},
  {path: '/calendar', component:Calendar},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;