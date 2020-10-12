<template>
   <div class="wrapper">
     <my-header/>

   </div>
</template>

<script>
import MyHeader from "@/components/header" 

export default {
  //name: 'App',
  components: {
     MyHeader
  }
}
</script>

<style lang="scss">

 .wrapper {
    width: 100%;
    margin: 0 auto;
    font-family: "Lato", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: $base;
}
</style>
