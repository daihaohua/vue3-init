export default [{
  path: '/about',
  name: 'About',
  component: () => import('@/views/About.vue'),
  meta: {
    outMenu: true
  }
},
{
  path: '/icon',
  name: 'Icon',
  component: () => import('@/views/Icon.vue'),
  meta: {
    outMenu: true
  }
}
]