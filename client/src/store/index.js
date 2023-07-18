import { defineStore } from 'pinia'
import axios from 'axios';
import { mapActions, mapState } from "pinia";


export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: []
  }),
  actions: {
    async getOnlineRecipes() {
      const requeteRecipes = await axios.get('http://yohannfallas-server.eddi.cloud:8090/recipes');
      this.recipes = requeteRecipes.data;
    },
    async setRecipe(data) {
      const setRecipe = await axios.post(' http://yohannfallas-server.eddi.cloud:8090/recipes', data)
      return setRecipe.data;
    },
    async getRecipe(id) {
      const response = await axios.get(`http://yohannfallas-server.eddi.cloud:8090/recipes/${id}`);
      return response.data

    }
  }
})