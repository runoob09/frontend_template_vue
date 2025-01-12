import { createRouter, createWebHistory } from 'vue-router'
import { routes} from "./routes.ts";

export default createRouter({
  history: createWebHistory(),
  routes
})