<template>
  <LatoutFixed></LatoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView></RouterView>
  <LayoutFooter> </LayoutFooter>
</template>


<script setup>
import LatoutFixed from './components/LayoutFixed.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())

</script>

<style lang="less" scoped></style>