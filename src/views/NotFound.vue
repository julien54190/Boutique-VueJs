<script setup lang="ts"></script>

<template>
  <div
    class="container d-flex flex-row justify-content-center align-items-center"
  >
    <h1>La page que vous cherchez n'existe pas. Retourne a la <router-link class="a" to="/boutique">Boutique</router-link></h1>
  </div>
</template>

<style lang="scss">
.container {
  height: 100%;
}

.a{
  font-size: 1.3em;
  text-decoration: underline;
}
</style>
