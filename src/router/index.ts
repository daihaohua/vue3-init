import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/draggable',
//     name: 'Draggable',
//     component: () => import(/* webpackChunkName: "about" */ '../views/Draggable.vue')
//   },
//   {
//     path: '/mapVuex',
//     name: 'MapVuex',
//     component: () => import('../views/MapVuex.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })





const routes: Array<RouteRecordRaw> = [];
// 自动加载路由配置
const modulesFiles = require.context('./modules', true, /.+\.ts$/)
modulesFiles.keys().forEach((modulePath: string) => {
  // console.log(modulePath,'modulePath')
  /**
   *  modulesFiles(modulePath)是Module对象，有个属性default，通过modulesFiles(modulePath).default便可获取到对应模块所导出的内容。
   */
  modulesFiles(modulePath).default && routes.push(...modulesFiles(modulePath).default)
})


const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router
