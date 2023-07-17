<template>
    <div class="main">
        <TitleComponent title="recettes" />
        <RecipeListComponent :recipes="recipes" />
    </div>
</template>
  
<script>
import { defineComponent } from "vue";

import TitleComponent from "@/components/TitleComponent.vue";
import RecipeListComponent from "@/components/recipe/RecipeListComponent.vue";



export default defineComponent({
    name: "HomePage",
    components: {
        TitleComponent,
        RecipeListComponent
    },
    data() {
        return {
            recipes: [],
            test: this.loggedIn,
        };
    },
    computed: {
        loggedIn() {
            return this.$store.getters.getIsLoading
        },
        getAllRecipe() {
            return this.$store.getters.getAllRecipes
        }
    },
    created() {
        this.recipes = this.getAllRecipe
    }
});
</script>
  
<style scoped>
/* Styles CSS spécifiques au composant ici */
</style>