<template>
  <div>
    <CardComponent v-for="(datas,index) in datas" :key="index" :cardmessage="datas"></CardComponent>
    <button type="button" @click="setids">更新</button>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue';
export default {
  data(){
    return{
      ids:1
    }
  },
  props:["datas"],
  components:{
    CardComponent
  },
   methods:{
     setids:function(){
       this.$emit('transfer',this.ids)
     }
   }
}
</script>

<style>
button{
  display: block;
  margin: 0 auto;
}
</style>