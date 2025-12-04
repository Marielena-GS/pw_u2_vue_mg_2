<template>
    <div>
        <br>
        <label for="id_nombre">Nombre</label>
        <input type="text" id="id_nombre" v-model="nombre">
        <p>{{ nombre }}</p>
        <label for="id_apellido">Apellido</label>
        <input type="text" id="id_apellido" v-model="apellido">

        <button @:click="imprimirNombre()">Imprimir Nombre</button>
        <button @:click="agregarEstudiante()">Agregar Estudiante</button>

        <h1>{{ arreglo }}</h1>

        <br>
        <hr>
        <label for="id_nombre_1">Nombre</label>
        <input id="id_nombre_1" type="text" v-model="nombre">

        <label for="id_apellido_1">Apellido</label>
        <input v-on:keypress.enter="agregarEstudiante1" id="id_apellido_1" type="text" v-model="apellido">

        <ul>
            <li 
            v-for="{ nombre, apellido } in arreglo" :key="nombre">
            {{ nombre }} - {{ apellido }}
            </li>
        </ul>

        <h2>Tabla</h2>
        
        <table>
            <thead>
                <th>Nombre</th>
                <th>Apellido</th>
            </thead>
            <tbody>
                <!--Recordar al usar desestructracion de datos usar el nombre de las variables que usa el objeto para no tener conficiones-->
                <tr v-for="{ nombre, apellido } in arreglo" :key="nombre">
                    <td>{{ nombre }}</td>
                    <td>{{ apellido }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nombre: null,
            apellido: null,
            //arreglo:[1,2,3,4]
            arreglo: []
        }
    },
    methods: {
        imprimirNombre() {
            console.log(this.nombre)
        },
        agregarEstudiante() {
            const estu = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            console.log("Se Agrega Estudiante")
            console.log(this.arreglo)
            this.arreglo.push(estu);
            this.limpiarFormulario();
        },
        agregarEstudiante1(event) {
            console.log('evento');
            if(event.charCode!==13){
                return;
            }
            console.log('presiono el ENTER');
            console.log('Agrego estudiante 1');
            console.log(event);
            console.log(event.charCode);
            const estu = {
                nombre: this.nombre,
                apellido: this.apellido
            }
            console.log("Se Agrega Estudiante")
            console.log(this.arreglo)
            this.arreglo.push(estu);
            this.limpiarFormulario();

        },

        limpiarFormulario() {
            this.nombre = null;
            this.apellido = null;
        }
    }
}
</script>

<style></style>