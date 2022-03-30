<template>
<h2>Coche -Options Api</h2>

  <p>Marca: {{brand}}</p>
  <p>model: {{model}}</p>
  <p>Power: {{power}}</p>
  <button @click="upPower(50)">Aumentar</button>
  <button @click="downPower">Disminuir</button>
</template>

<script>
export default {
 data(){
   return {
     brand: "Seat",
     model: "Leon",
     power: 50
   }
  },
  methods:{
   upPower(newPower){
     console.log("Aumentando potencia");
     this.power = this.power +newPower;
   },
    downPower(){
      console.log ("Bajando Potencia")
      this.power--;
    }
  }
}
</script>

<style scoped>

</style>