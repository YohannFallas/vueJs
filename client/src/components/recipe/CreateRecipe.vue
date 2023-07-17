<template>
    <div>
        <TitleComponent title="créer une recette" />
        <form @submit.prevent="saveRecipe">
            <div>
                <label class="label" for="title">
                    Titre
                </label>
                <input class="input" type="text" name="title" id="title" placeholder="Titre de la recette" v-model="name" />

            </div>

            <div>
                <label class="label" for="duration">Temps de cuisson</label>
                <input class="input" type="text" name="duration" id="duration" placeholder="10 minutes"
                    v-model="duration" />
            </div>

            <div>
                <label class="label" for="cost">Coût par personne</label>
                <input class="input" type="text" name="cost" id="cost" placeholder="1€" v-model="cost" />
                <div>
                    <label class="label" for="recipe">Recette</label>
                    <p><textarea name="recipe" id="recipe" rows="10" v-model="recipe"></textarea></p>
                </div>
            </div>
            <input class="submit" type="submit" value="Sauvegarder" />

        </form>
    </div>
</template>

<script>
import TitleComponent from '@/components/TitleComponent.vue'


export default {
    name: "CreateRecipe",
    data() {
        return {
            title: String(),
            duration: String(),
            cost: String(),
            recipe: String()
        }
    },
    components: { TitleComponent },
    methods: {
        saveRecipe() {
            const recipe = {
                id: Math.floor(Math.random() + Date.now()),
                name: this.name,
                duration: this.duration,
                cost: this.cost,
                recipe: this.recipe
            }
            this.$store.dispatch('newRecipeAction', recipe)

        }
    }

}


</script>

<style scoped>
div {
    margin: 20px;
}

label {
    display: block;
    margin-bottom: 0.6em;
    text-align: start;
    font-size: 1.1em;
}

.input {
    margin-bottom: 1.5em;
    height: 40px;
    width: 100%;
    background-color: #f0f4ee;
    border: none;
    border-radius: 0.5em;
    padding: 1.5rem 2rem;
}

.submit {
    background-color: #42b983;
    border: none;
    padding: 0.6em 1.4em;
    border-radius: 0.4em;
    font-size: 1em;
    display: block;
    margin-top: 1em;
    cursor: pointer;
}

textarea {
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: #f0f4ee;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>