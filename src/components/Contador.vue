<template>
  <div>
    <h1>{{ tit }}</h1>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup>={{ calcularCubo }}</p>
    <p>{{ numero }}<sup>2</sup>={{ obtenerCubo() }}</p>
    <div>
      <button @:click="incrementar()">+1</button>
      <button @:click="decrementar()">-1</button>
      <button v-show="mostrar">prueba</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //propiedades reactivas con data
      numero: this.inicio,
      titulo: "Contador",
    };
  }, //fin propiedad reactiva
  methods: {
    //metodos
    obtenerCuadrado() {
      console.log("Entro a obtener Cuadrado");
      return this.numero * this.numero; //agregar this para variables locales
    },
    obtenerCubo() {
      return this.numero * this.numero * this.numero;
    },
    incrementar() {
      console.log(this.tit);
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  }, //propiedades computadas no son metodos, se ejecutan solo cuando existe un cambio en la respuesta caso contrario se guarda las respuestas en cache
  computed: {
    calcularCuadrado() {
      console.log("Entro a propiedad computada");
      return this.numero * this.numero;
    },
    calcularCubo() {
      return this.numero * this.numero * this.numero;
    },
  },
 /* props: ["tit", "inicio", "mostrar"], declaracion basica de props*/
 props: {
  tit : String,
  inicio : {
    type: Number,
    default: 99,
    validator(value){//validaciones
      return value>10;
    }
  },
  mostrar: Boolean
 }/*Sting, Number, Boolean, Array, Object, Date, Funcion, BigInt */
};
</script>

<style>
</style>