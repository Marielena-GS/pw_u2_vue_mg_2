<template>
  <div class="card">
    <PokemonImagen v-if="mostrar" :pokemonId="pokemonGanador" />
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
  <button @click="destruir()">Algo</button>
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
      ganador: false,
      perdedor: false,
      mostrar:true,
    };
  },
  /*Crea el componente */
  beforeCreate() {
    console.log("beforeCreate: Apenas inicia la instancia del componente");
  },
  created() {
    console.log(
      "created: se ejecuta cuando ya se resolvieron data, computed, methods, watch"
    );
  },
  /*Monta el componente es cuando se renderiza o visualiza el componente */
  beforeMount() {
    console.log("beforeMount: Justo antes del primer render de un HTML");
  },
  mounted() {
    console.log("mounted: Es cuando ya se renderizo el compomente");
  },
  mounted() {
    console.log("componente montado");
    this.iniciarJuego();
  },

  /*Actualizacion de un componente */
  beforeUpdate(){
    console.log("beforeUpdate: se ejecuta cuando hubo un cambio de una data un props y Vue esta por renderizar")
  },
  updated(){
    console.log("updated: cuando ya se actualizo despues de la renderizacion");
  },
  /**Desmontaje de un componente */
  beforeUnmount(){
console.log("beforeUnmount: Justo antes de que el componente se destruya")
  },
  unmounted(){
console.log("unmounted: ya fue removido del DOM y destruido")
  }
  ,
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
        this.ganador = true;
        this.perdedor = false;
        console.log("Ganador");
      } else {
        this.ganador = false;
        this.perdedor = true;
        console.log("Perdedor");
      }
    },
    destruir(){
        this.mostrar=false;
    }
  },
};
</script>

<style>
.texto {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: black;
}
</style>