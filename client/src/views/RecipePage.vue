<template>
    <div class="main single-recipe">
        <TitleComponent :title="recipe.name" />

        <figure>
            <img :src="`../../src/assets/images/${recipe.imgSrc}`" :alt="recipe.name" />
        </figure>
        <p>{{ recipe.description }}</p>
    </div>
</template>
  
<script>
import { defineComponent } from "vue";

import TitleComponent from "@/components/TitleComponent.vue";

export default defineComponent({
    name: "RecipePage",
    components: {
        TitleComponent
    },
    props: {
        recipe: {
            type: Object,
            required: true
        }
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