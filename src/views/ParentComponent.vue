<template>
  <div>
    父组件
    <cardcomponent :datas="datas" @transfer="getids"></cardcomponent>
  </div>
</template>

<script>
import cardcomponent from "./ChildComponent.vue"
export default {
  data(){
    return{
      datas:[
        {
          name:"小李",
          Email:"123456789@qq.com",
          jiaose:"员工"
        },
        {
          name:"小洪",
          Email:"123456789@qq.com",
          jiaose:"员工"
        },
        {
          name:"小蓝",
          Email:"123456789@qq.com",
          jiaose:"员工"
        }
    ]
    }
  },
  components:{
      cardcomponent
  },
  methods:{
    getids(msg){
      if(msg==1){
        this.datas=[
        {
          name:"admin",
          Email:"123456789@qq.com",
          jiaose:"管理员"
        },
        {
          name:"小周",
          Email:"743881828@qq.com",
          jiaose:"员工"
        },
        {
          name:"小白",
          Email:"743881828@qq.com",
          jiaose:"员工"
        },
        {
          name:"小绿",
          Email:"743881828@qq.com",
          jiaose:"员工"
        }
    ]
      }
    }
  }
}
</script>

<style>

</style>