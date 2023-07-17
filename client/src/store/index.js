import { createStore } from 'vuex'

import recipes from "@/assets/data/recipes";

export default createStore({
  state: {
    isLoggedIn: true,
    recipes: [...recipes]
  },
  getters: {
    getIsLoading(state) {
      return state.isLoggedIn
    },
    getAllRecipes(state) {
      return state.recipes
    },
    getRecipeById(state, id) {
      return state.recipes.find(recipe => recipe.id === Number(id))
    }
  },
  mutations: {
    newRecipeMutation(state, newRecipe) {
      state.recipes.push(newRecipe);
    }
  },
  actions: {
    newRecipeAction(store, newRecipe) {
      store.commit('newRecipeMutation', newRecipe)
    }
  },
  modules: {
  }
})
