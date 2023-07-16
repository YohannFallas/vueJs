import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import RecipePage from "@/views/RecipePage.vue";
import recipes from "@/assets/data/recipes.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    {
      path: "/recipes/:id",
      component: RecipePage,
      props: route => ({
        recipe: recipes.find(recipe => recipe.id === Number(route.params.id))
      })
    }
  ]
});

export default router;