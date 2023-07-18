<template>
    <div class="main single-recipe">
        <TitleComponent :title="recipe.name" />

        <figure>
            <img :src="`../../src/assets/images/${recipe.imgSrc}`" :alt="recipe.name" />
        </figure>
        <p>{{ recipe.description }}</p>
        <CommentListComponent />
    </div>
</template>
  
<script>
import { defineComponent } from "vue";
import { useRecipeStore } from "@/store";

import TitleComponent from "../components/TitleComponent.vue";
import CommentListComponent from "@/components/comments/CommentListComponent.vue"

export default defineComponent({
    name: "RecipePage",
    components: {
        TitleComponent, 
        CommentListComponent
    },
    data() {
        return {
            recipe: {}
        }
    },
    async created() {
        this.recipe = await useRecipeStore().getRecipe(this.$route.params.id);
    }
});
</script>
  
<style scoped>
.single-recipe figure {
    width: calc(100% - 2rem);
    margin: 0 0 1rem;
}

.single-recipe img,
.single-recipe p {
    border-radius: 16px;
    margin: 0 1rem;
}

.single-recipe p {
    text-align: left;
}
</style>