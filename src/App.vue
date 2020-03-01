<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/bcomp">Bcomp</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    $mainHue: 180;

    html, body {
        margin: 0;
        background: #f9fafa;
    }

    * {
        box-sizing: border-box;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background: #f9fafa;
    }
</style>
