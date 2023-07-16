<template>
    <footer class="footer">
        <nav>
            <ul class="menu">
                <li>
                    <router-link class="menu-link" to="/">Liste des recettes</router-link>
                </li>
                <template v-if="!isLoggedIn">
                    <li>
                        <router-link class="menu-link" to="/registration">Inscription</router-link>
                    </li>
                    <li>
                        <router-link class="menu-link" to="/login">Connexion</router-link>
                    </li>
                </template>
                <li v-else>
                    <router-link class="menu-link" to="/recipe/add">Créer une recette</router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "FooterComponent",
    props: {
        isLoggedIn: {
            type: Boolean,
            required: true
        }
    }
});
</script>
  
<style scoped>
.footer {
    background-color: #ffffff;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0px -3px 10px #cad6c4;
}

.footer nav {
    height: 100%;
}

.footer .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    height: 100%;
    font-weight: bold;
}

.footer .menu-link {
    margin: 0 8px;
    color: #2c3e50;
    text-decoration: none;
}

.footer .router-link-active {
    color: #42b983;
}
</style>