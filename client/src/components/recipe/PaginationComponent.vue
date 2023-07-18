<template>
    <RecipeComponent v-for="recette in paginatedRecettes" :key="recette.id" :recipe="recette" />
    <div>
        <select v-model="currentPage">
            <option v-for="page in totalPages" :key="page">
                {{ page }}
            </option>
        </select>

        <!-- <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button> -->
    </div>
</template>

<script>
import RecipeComponent from "./RecipeComponent.vue";


export default {
    name: "PaginationComponent",
    props: {
        data: {
            type: Array,
            required: true
        },
        itemsPerPage: {
            type: Number,
            default: 10
        },
    },
    data() {
        return {
            currentPage: 1,
        };
    },
    computed: {
        paginatedRecettes() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.data.slice(startIndex, startIndex + this.itemsPerPage);
        },
        totalPages() {
            return Math.ceil(this.data.length / this.itemsPerPage);
        },
    },
    methods: {
        nextPage() {
            this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
        },
        prevPage() {
            this.currentPage = Math.max(this.currentPage - 1, 1);
        },
    },
    components: {
        RecipeComponent,
    },
    created() {
        console.log(this.data)
    }
};


</script>