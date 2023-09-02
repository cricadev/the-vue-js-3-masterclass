<template lang="">
  <div>
    <h1 class="text-5xl">
      {{ pokemon.name }}
    </h1>
    <img :src="pokemon.sprites.front_default" alt="">
    
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const pokemon = ref(null);
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => response.json())
  .then(data => pokemon.value = data);

</script>
<style lang="">
  
</style>