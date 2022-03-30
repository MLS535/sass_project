<template>
<h1>Estamos en el juego</h1>
  <p>{{$route.params.name}}</p>
  <button @click="load">Cargar</button>
</template>

<script>

import {useRoute, useRouter} from "vue-router";

export default {
 setup(){
   const route = useRoute();
   const router = useRouter();
   console.log (route.params);
   console.log (router)

   const load = () =>{
   setTimeout(()=>{
     console.log ('volver a la home')
     router.push("/")
   },3000 )
   }
   return{
     load,
   }
 }
}
</script>

<style scoped>

</style>