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

import recipes from "@/assets/data/recipes";

export default defineComponent({
    name: "HomePage",
    components: {
        TitleComponent,
        RecipeListComponent
    },
    data() {
        return {
            recipes
        };
    }
});
</script>
  
<style scoped>
/* Styles CSS spécifiques au composant ici */
</style>