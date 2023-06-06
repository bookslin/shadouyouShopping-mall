<template>
  <LayoutNav></LayoutNav>
  <RouterView></RouterView>
  <LayoutHeader></LayoutHeader>
  <LayoutFooter></LayoutFooter>
  <LatoutFixed></LatoutFixed>

</template>

<script setup>
import LatoutFixed from './components/LayoutFixed.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

</script>

<style lang="less" scoped>

</style>