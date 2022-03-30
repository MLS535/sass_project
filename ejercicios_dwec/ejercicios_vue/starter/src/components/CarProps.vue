<template>
  <h2>Coche -Composition Api</h2>

  <p>Marca: {{ brand }}</p>
  <p>model: {{ model }}</p>
  <p>Power: {{ power }}</p>
    <button @click="upPower">Aumentar</button>
  <button @click="downPowerFn">Disminuir</button>
</template>

<script>

export default {
  props: {
    power: {
      type: Number,
      default: 60,
    },
    upPower: Function,

  },
  emits: ["downPower"],
  setup(props, context) {
    const brand = "Audio";
    const model = "A4";

    const downPowerFn = () =>{
     console.log ("Hola mundo");
     context.emit("downPower")
   }
    // let power = 40;

    // console.log ( props.power )
    //
    // const testPower =() =>{
    //  props.upPower();
    // }
    return {
      brand, model, downPowerFn
    }
  }
}
</script>

<style scoped>

</style>