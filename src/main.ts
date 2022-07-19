import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  '@/svg/index'
import '@/assets/styles/iconfont/iconfont.css'
import comment from '@/components/comment/index';
import { createPinia } from 'pinia'

const app = createApp(App);
// 公共引入全局组件
// console.log(comment);
comment(app);
// app.use(store).use(router).mount('#app')
app.use(createPinia())
app.use(router).mount('#app')
