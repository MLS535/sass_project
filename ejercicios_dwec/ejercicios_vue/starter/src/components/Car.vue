<template>
    <h2>Coche</h2>
    <p>Marca: {{brand}}</p>
    <p>model: {{model}}</p>

      <ul>

  <li v-for="(color, index) in colors" :key="index">
    {{index +1}}: {{color}}
  </li>
</ul>
  <p>Potencia Urbanas </p>
  <ul>
<!--    <li v-for="powers in power" :key="power">-->
<!--      <template v-if="powers < 300">-->
<!--      {{powers}}-->
<!--        </template>-->
<!--    </li>-->


<!--    if else-->
    <template v-for="(powers, index) in power" :key="index">
      <li v-if="powers < 240"> Urbana:{{powers}}</li>
      <li v-else-if="powers === 240"> Hibrido: {{powers}}</li>
      <li v-else> Carrera:{{powers}}</li>

      <li v-if="powers === 500"> Super:{{powers}}</li>
    </template>
  </ul>
    <p>Power: {{power}}</p>
    <p>Mensaje: {{mensaje.title}}</p>
    <p>Mensaje: {{mensaje.text}}</p>
</template>

<script>

export default {
  setup(){
    const brand = "Audio";
    const model = "A4";
    const colors = ["Azul", "Rojo", "Morado", "Azul"];
    const price = 38000;
    const power = [240, 60,120,160,200,300, 390, 540, 500, 599];
    const mensaje = {
      title: "Estoy bien",
      text: "Welcome"
    }
    return {
     brand, model,colors, price, power, mensaje,
    }
  },

}
</script>

<style scoped>

</style>