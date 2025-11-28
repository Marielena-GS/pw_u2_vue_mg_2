<template>
  <div>
    <Contador tit="Contador 1" v-bind:inicio="4" :mostrar="true"/>
    <Contador tit="Contador 2" :inicio="15" :mostrar="true" />
  </div>
</template>
<script>
import Contador from '../components/Contador.vue';
export default {
  components: {
    Contador,
  },
};
</script>

<style>
</style>