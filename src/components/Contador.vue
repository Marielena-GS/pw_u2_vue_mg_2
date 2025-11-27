<template>
    <div>

        <h1>{{tit}}</h1>
        <p>{{numero}} <sup>2</sup> = {{ obtenerCuadrado()}} </p>
        <p>{{numero}} <sup>2</sup> = {{ calculaCuadrado }} </p>
        <p>{{numero}} <sup>2</sup> = {{ calculaCuadrado }} </p>
        <p>{{numero}} <sup>2</sup> = {{ calculaCubo}} </p>
        <p>{{numero}} <sup>2</sup> = {{ obtenerCubo()  }} </p>

        <div>
            <button @:click ="incrementar()">+1</button>
            <button @:click="decrementar()">-1</button>
            <button v-show="mostrar">Prueba</button>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            numero: this.inicio,
            titulo: 'Contador'
        };
    },

    methods: {
        obtenerCuadrado() {
            console.log("Entro a obtener cuadrado");
            return this.numero * this.numero;
        },
        obtenerCubo() {
            console.log("Entro a obtener cubo");
             return this.numero * this.numero * this.numero;
        },
        incrementar(){
            console.log(this.tit);
            this.numero ++;
        },
        decrementar(){
            this.numero --;
        },
    },

    computed:{
        calculaCuadrado() {
            console.log("Entro a propiedad computada");
            return this.numero * this.numero;
        },
        calculaCubo(){
            console.log("Entro a propiedad computada");
            return this.numero * this.numero * this.numero;
        }
    },

    /*props: ["tit", "inicio", "mostrar"],  declaracion basica de props*/

    /*forma más específica */
    props: {
        tit: String,
        inicio:{
            type: Number,
            default: 99,
            validator(value){
                return value > 10;
            }
        },
        mostrar: Boolean
    }

    /*Tipos de los que puedo declarar los props
    String, Number, Boolean, Array, Object, Date, Funcion, BigInt */

};

</script>

<style>
</style>

