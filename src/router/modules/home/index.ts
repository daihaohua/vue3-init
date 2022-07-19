export default [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
        outMenu: true
    }
}, {
    path: '/draggable',
    name: 'Draggable',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Draggable.vue')
},
{
    path: '/mapVuex',
    name: 'MapVuex',
    component: () => import('@/views/MapVuex.vue')
}
]