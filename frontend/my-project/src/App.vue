<template>
  <div class="wrapper">
    <my-header />
    <my-nuv />
    <baner />
    <category />
  </div>
</template>

<script>
import MyHeader from "@/components/header";
import MyNuv from "@/components/nav";
import Baner from "@/components/baner";
import Category from "@/components/category";

export default {
  //name: 'App',
  components: {
    MyHeader,
    MyNuv,
    Baner,
    Category,
  },
};
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
