<template>
  <div class="pokemon-container">
    <img :src="srcImagen" alt="No se pudo renderizar" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  beforeUnmount() {
    console.log("beforeUnmount: Justo antes de que el componente se destruya");
  },
  unmounted() {
    console.log("unmounted: ya fue removido del DOM y destruido");
  },
};
</script>

<style>
img {
  position: relative;
  height: 200px;
  right: 32%;
}

.pokemon-container {
  height: 200px;
}
</style>