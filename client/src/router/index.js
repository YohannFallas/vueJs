import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import RecipePage from "@/views/RecipePage.vue";

import CreateRecipe from "@/components/recipe/CreateRecipe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    {
      path: "/recipes/:id",
      component: RecipePage
    },
    {
      path: "/recipe/add",
      component: CreateRecipe
    }

  ]
});

export default router;