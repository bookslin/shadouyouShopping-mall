import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from '@/apis/Layout';
export const useCategoryStore = defineStore("category", () => {

    //导航列表数据管理
    //store 导航列表数据

    const categoryList = ref([])
        //action获取导航数据的方法
    const getCategory = async() => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }
})