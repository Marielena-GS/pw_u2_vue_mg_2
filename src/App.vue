<template>
  <div></div>
  <div>
      <!--<ContadorView/> -->
    <!----<DirectivasView/> -->
    <!--<PreguntaView/> -->
    <PokemonView/>
  </div>
 
</template>

<script >
import ContadorView from './views/ContadorView.vue';
import DirectivasView from './views/DirectivasView.vue'; //nuevo
import PreguntaView from './views/PreguntaView.vue';
import PokemonView from './views/PokemonView.vue';

export default{
    components: {
        ContadorView,
        DirectivasView,
        PreguntaView,
        PokemonView
    }
  }

</script>
<style></style>