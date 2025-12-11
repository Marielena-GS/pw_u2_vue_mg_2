<template>
  <div></div>
  <div>
      <!--<ContadorView/> -->
    <!----<DirectivasView/> -->
    <PreguntaView/>
  </div>
 
</template>

<script >
import ContadorView from './views/ContadorView.vue';
import DirectivasView from './views/DirectivasView.vue'; //nuevo
import PreguntaView from './views/PreguntaView.vue';

export default{
    components: {
        ContadorView,
        DirectivasView,
        PreguntaView,
    }
  }

</script>
<style></style>