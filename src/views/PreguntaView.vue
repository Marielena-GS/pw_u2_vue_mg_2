<template>
    <div class="view-container">
         <Pregunta />
    </div>
  
</template>

<script>

    import Pregunta from '../components/Pregunta.vue';
    export default {

        components:{
            Pregunta,
        },
    };

</script>

<style scope>

.view-container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  align-items: center;
  text-align: center;
}
h2{
  font-size: 50px;
}

</style>