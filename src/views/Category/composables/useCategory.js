////封装category分类相关业务代码

import { getTopCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router'
import { useRoute } from 'vue-router';

export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async(id = route.params.id) => {
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

    //路由参数变化的时候 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        // console.log('路由变化了');
        // console.log(to);
        getCategory(to.params.id)


    })
    return {
        categoryData
    }

}