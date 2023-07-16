<template>
    <article class="recipe">
        <router-link class="recipe-link" :to="`/recipes/${recipe.id}`">
            <figure>
                <img :src="`../../src/assets/images/${recipe.imgSrc}`" :alt="recipe.name" />
            </figure>
            <div>
                <h3>{{ recipe.name }}</h3>
                <p>{{ recipe.description }}</p>
            </div>
        </router-link>
    </article>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "RecipeComponent",
    props: {
        recipe: {
            type: Object,
            required: true
        }
    },
});
</script>
  
<style scoped>
.recipe {
    background: #f0f4ee;
    border-radius: 16px;
    width: calc(100% - 2rem);
    overflow: hidden;
    margin: 0 auto 1rem;
}

.recipe .recipe-link {
    text-decoration: none;
}

.recipe figure {
    width: 100%;
}

.recipe img {
    object-fit: cover;
}

.recipe div {
    padding: 1rem 2rem;
    text-align: left;
}

.recipe h3 {
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
}

.recipe p {
    line-height: 1em;
}
</style>