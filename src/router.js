import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./components/LoginPage.vue";
import SignUpPage from "./components/SignUpPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LoginPage },
    { path: "/signup", component: SignUpPage },
  ],
});

export default router;
