const path = require('path')

export default function () {
  const { extendRoutes, addPlugin } = this

  extendRoutes((routes) => {
    routes.push({
      path: '/users',
      component: path.resolve(__dirname, 'pages/Index.vue'),
      children: [
        {
          name: 'users-index',
          path: '/',
          component: path.resolve(__dirname, 'pages/Home.vue'),
        },
      ],
    })
  })

  addPlugin(path.resolve(__dirname, 'plugins/add-store.js'))
}
