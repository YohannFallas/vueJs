<template>
    <header id="header" :class="{ 'flex-between-center': isLoggedIn }">
        <div class="brand">
            <figure id="logo">
                <img alt="Vue logo" src="@/assets/images/oven.svg" />
            </figure>
            <div id="title">
                <p>10 minutes</p>
                <h1>O'Four</h1>
            </div>
        </div>
        <div v-if="isLoggedIn" id="account">
            <div id="name">
                <p>John Doe</p>
            </div>
            <div id="account-menu">
                <img id="account-icon" src="@/assets/images/account-icon.png" alt="account icon" />
                <button id="logout-button">Déconnexion</button>
            </div>
        </div>
    </header>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "HeaderComponent",
    props: {
        isLoggedIn: {
            type: Boolean,
            required: true
        }
    }
});
</script>
  
<style scoped>
#header {
    background-color: #f0f4ee;
    box-shadow: 0px 3px 10px #cad6c4;
    margin-bottom: 60px;
    padding: 1em;
    text-decoration: none;
    color: black;
}

.flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#account {
    display: flex;
    align-items: center;
}

#name p {
    font-size: 1.2em;
    font-weight: bold;
    line-height: 30px;
}

#account-icon {
    height: 3em;
    margin: 10px 0 10px 10px;
}

.brand {
    display: flex;
    justify-content: center;
}

#title p {
    font-size: 1em;
    font-weight: bold;
    margin: 0px;
}

#title h1 {
    font-size: 1.6em;
    font-weight: lighter;
}

#logo {
    height: 3rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

#logo img {
    height: 100%;
}

#account-menu {
    position: relative;
}

#logout-button {
    display: none;
    position: absolute;
    top: 4rem;
    right: 0;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem 0 0.25rem 0.25rem;
    background-color: #cad6c4;
    box-shadow: 0 0 5px #767676ff;
    cursor: pointer;
    font-weight: 700;
}

#account-menu:hover #logout-button {
    display: block;
}
</style>