<template>
  <div class="card">
    <PokemonImagen :pokemonId="pokemonGanador" />
    <PokemonOpciones 
      @seleccionado="evaluarGanador($event)"
      :listaPokemons="pokemonArr" 
    />
    <div class="texto">
    <div v-if="ganador">
        <h1>Ganador</h1>
    </div>
    <div v-if="perdedor">
        <h1>Perdedor</h1>
    </div>
    </div>
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import {
  obtenerVectorPokemonFacade,
  obtenerAleatorioFachada,
} from "../clients/PokemonClient";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },

  data() {
    return {
      pokemonArr: [],
      pokemonGanador: null,
      ganador:false,
      perdedor:false,
    };
  },
  mounted() {
    console.log("componente montado");
    this.iniciarJuego();
  },

  methods: {
    async iniciarJuego() {
      this.pokemonArr = await obtenerVectorPokemonFacade();

      const idAletorio = obtenerAleatorioFachada(0, 3);
      this.pokemonGanador = this.pokemonArr[idAletorio].id;
    },
    evaluarGanador(idGanador) {
      console.log("Valor recibido desde padre");
      console.log(idGanador);
      if (idGanador === this.pokemonGanador) {
        this.ganador=true;
        this.perdedor=false;
        console.log("Ganador")
      } else {
         this.ganador=false;
        this.perdedor=true;
        console.log("Perdedor");
      }
    },
  },
};
</script>

<style>
    .texto{
        justify-content: center;
        align-items: center;
        color: black;
    }
</style>