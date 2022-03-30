<template>
<h1>{{title}}</h1>
<!--  <p>-->
<!--    {{memes}}-->
<!--  </p>-->
  <div class="total-show">
    <select @change="changeTotalShow">
      <option value="">All</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
  <div class="row">
    <template v-for="meme in memes" :key="meme.id">
<!--      <p>{{meme.name}}</p>-->
      <Meme :meme="meme"/>
    </template>
  </div>
</template>

<script>
import Meme from "@/components/Meme";


import {useStore} from "vuex";
import {onMounted, computed} from "vue";
// useStore
export default {
  components:{
    Meme
  },
  // name: "ListMemes",
  setup() {
    const store = useStore ()
    //Guarda el estado en una variable
    const memes = computed(()=> store.state.memes)
    // console.log ( store.state.titleApp )
    onMounted(() =>{
  store.dispatch("getMemes")
    })

    const changeTotalShow = (e) =>{
  store.dispatch("getMemes",
      {
        total: e.target.value,
      });

    }
    return {
      // ...store.state,
      title: store.state.titleApp,
      memes,
      changeTotalShow
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
.total-show{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}
</style>