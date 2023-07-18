<template>
    <div class="main">
        <TitleComponent title="recettes" />
        <RecipeListComponent :recipes="recipes" />
    </div>
</template>
  
<script>
import { defineComponent } from "vue";
import { useRecipeStore } from '@/store/'
import { mapState, mapActions } from 'pinia'

import TitleComponent from "@/components/TitleComponent.vue";
import RecipeListComponent from "@/components/recipe/RecipeListComponent.vue";



export default defineComponent({
    name: "HomePage",
    components: {
        TitleComponent,
        RecipeListComponent
    },
    computed: {
        ...mapState(useRecipeStore, ["recipes"])

        // Pour utiliser Pinia sans les objets map
        // recipes() {
        //     const store = useRecipeStore()
        //     return store.recipes;
        // }

    },
    created() {
        this.getOnlineRecipes();

    },
    methods: {
        ...mapActions(useRecipeStore, ["getOnlineRecipes"])
    }
});
</script>
  
<style scoped>
/* Styles CSS spécifiques au composant ici */
</style>