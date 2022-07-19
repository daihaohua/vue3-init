export default [{
  path: '/about',
  name: 'About',
  component: () => import('@/views/About.vue'),
  meta: {
    outMenu: true
  }
}]