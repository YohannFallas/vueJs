<template>
    <h2 class="title">{{ title }}</h2>
</template>
  
<script>


export default {
    name: "TitleComponent",
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>
  
<style scoped>
.title {
    font-size: 1.625rem;
    font-weight: bold;
    margin: 1rem auto;
    text-transform: uppercase;
    text-align: center;
}
</style>