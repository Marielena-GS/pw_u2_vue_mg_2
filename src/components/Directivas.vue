<template>
  <div>
    <label for="id_nombre">Nombre</label>
    <input type="text" id="id_nombre" v-model="nombre">
    <p>{{ nombre }}</p>
    <label for="id_apellido">Apellido</label>
    <input type="text" id="id_apellido" v-model="apellido">



    <button @:click="imprimirNombre()">Imprimir Nombre</button>

    <button @:click="agregarEstudiante()">Agregar Estudiante</button>


    <h1>{{ arreglo }}</h1>

    <ul >
        <li  v-for="{nombre,apellido} in arreglo" :key="nombre" >{{ nombre }} - {{ apellido }}</li>
    </ul>
    
    <h1>Tabla</h1>
    <table>
        <thead>
            <th>Nombre</th>
            <th>Apellido</th>
        </thead>
        <tbody> 
            <!--Recordar al usar desestructracion de datos usar el nombre de las variables que usa el objeto para no tener conficiones-->
            <tr v-for="{nombre,apellido} in arreglo" :key="nombre"> 
               <td>{{ nombre }}</td>
               <td>{{ apellido }}</td> 
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
    data(){
        return {
            nombre: null,
            apellido: null,
            //arreglo:[1,2,3,4]
            arreglo:[]
        }
    },
    methods:{
        imprimirNombre(){
            console.log(this.nombre)
        },
        agregarEstudiante(){
            const estu = {
                nombre: this.nombre,
                apellido:this.apellido
            }
            console.log("Se Agrega Estudiante")
            console.log(this.arreglo)
            this.arreglo.push(estu);
            this.limpiarFormulario();
        },
        limpiarFormulario(){
            this.nombre=null;
            this.apellido=null;
        }
    }
}
</script>

<style>

</style>