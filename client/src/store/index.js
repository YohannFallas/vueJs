import { defineStore } from 'pinia'
import axios from 'axios';



export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: []
  }),
  actions: {
    async getOnlineRecipes() {
      const requeteRecipes = await axios.get(' http://guillaumepons63-server.eddi.cloud:8090/recipes');
      this.recipes = requeteRecipes.data;
    }
  }
})
