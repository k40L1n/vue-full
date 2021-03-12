import { createRouter, createWebHistory } from "vue-router";

import Home from "./src/pages/Home";
import Heroes from "./src/pages/Heroes";
import Calendar from "./src/pages/Calendar";
import Markdown from "./src/pages/Markdown";
import Slider from "./src/pages/Slider";
import Calculator from "./src/pages/Calculator";

const routes = [
  { path: "/", component: Home },
  { path: "/heroes", component: Heroes },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;