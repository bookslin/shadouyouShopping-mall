// 把components中的所组件都进行全局化注册
// 通过插件的方式
import ImageView from './ImageView/index.vue'
import sdySku from './sdySku/index.vue'
export const componentPlugin = {
    install(app) {
        // app.component('组件名字'，组件配置对象)
        app.component('sdyImageView', ImageView)
        app.component('sdySku', sdySku)
    }
}