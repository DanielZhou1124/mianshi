<template>
  <div class="card">
    <span>{{ cardmessage.name }}</span>
    <span>{{ cardmessage.Email }}</span>
    <span>{{ cardmessage.jiaose }}</span>
  </div>
</template>

<script>
export default {
  props:["cardmessage"]
}
</script>

<style>
.card{
  width:180px;
  height: 250px;
  border: 1px solid black;
  margin: 20px;
  display: inline-block;
}
span{
  display: block;
}
</style>