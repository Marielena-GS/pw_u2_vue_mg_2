<template>
  <div></div>
  <div>
    <ContadorView/>
      <!--<ContadorView/> -->
    <DirectivasView/>
  </div>
 
</template>

<script >
import ContadorView from './views/ContadorView.vue';
import DirectivasView from './views/DirectivasView.vue'; //nuevo
export default{
    components: {
        ContadorView,
        ContadorView,
        DirectivasView
    }
  }

</script>
<style></style>