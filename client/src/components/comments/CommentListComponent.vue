<template>
    <div>
        <CommentComponent />

    </div>
</template>
  
<script>
import { defineComponent } from "vue";

import CommentComponent from './CommentComponent.vue'

export default defineComponent({
    name: "CommentListComponent",
    components: {
        CommentComponent
    }
});
</script>
  
<style scoped>
/* Styles CSS spécifiques au composant ici */
</style>