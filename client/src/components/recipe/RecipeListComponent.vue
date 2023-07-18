<template>
    <PaginationComponent :data="recipes" :itemsPerPage="4" />
</template>
  
<script>

import PaginationComponent from "./PaginationComponent.vue"

export default {
    name: "RecipeListComponent",
    components: {
        PaginationComponent
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