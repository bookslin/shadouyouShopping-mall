import httpInstance from "@/utils/http";

//获取banner
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}

//新鲜好物
export function findNewAPI() {
    return httpInstance({
        url: '/home/new'
    })
}
//人气推荐
export function getHotAPI() {
    return httpInstance({
        url: '/home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}