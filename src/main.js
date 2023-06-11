import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载指令插件并注册
import { lazyPlugin } from './directives'
import { componentPlugin } from './composables'

const app = createApp(App)

app.use(lazyPlugin)
app.use(createPinia())
app.use(router)
app.use(componentPlugin)
app.mount('#app')