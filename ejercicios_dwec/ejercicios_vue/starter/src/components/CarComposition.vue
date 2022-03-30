<template>
  <h2>Coche -Composition Api</h2>

  <p>Marca: {{brand}}</p>
  <p>model: {{model}}</p>
  <p>Power: {{power}}</p>
  <button @click="upPower(20)">Aumentar</button>
  <button @click="downPower">Disminuir</button>
</template>

<script>
import {ref}  from "vue";
export default {
 setup(){
   const brand = "Audio";
   const model = "A4";
   let power = ref(40);

   const upPower = (newPower) =>{
     console.log ("Aumentando motores ")
     power.value= power.value+newPower;
     //power.value++

   }

   const downPower = () =>{
     console.log ("Disminuyendo motores")
     power.value--;

   }
   return {
     brand, model, power, upPower, downPower
   }
 }
}
</script>

<style scoped>

</style>