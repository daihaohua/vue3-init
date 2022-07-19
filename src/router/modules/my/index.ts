export default [{
    path: '/my',
    name: 'My',
    component: () => import('@/views/My.vue'),
    meta: {
        outMenu: true
    }
},
]