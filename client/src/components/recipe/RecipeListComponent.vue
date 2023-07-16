<template>
    <RecipeComponent v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
</template>
  
<script>
import RecipeComponent from "@/components/recipe/RecipeComponent.vue";
export default {
    name: "RecipeListComponent",
    components: {
        RecipeComponent
    },
    props: {
        recipes: {
            type: Array,
            required: true
        }
    }
};
</script>
  
<style scoped>
/* Styles CSS spécifiques au composant ici */
</style>