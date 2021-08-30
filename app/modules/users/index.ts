import { Module } from '@nuxt/types'

const path = require('path')

const usersModule: Module = function () {
  const { extendRoutes, addPlugin } = this

  extendRoutes((routes: any) => {
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

  addPlugin(path.resolve(__dirname, 'plugins/add-store.ts'))
}

export default usersModule
