import { Module } from '@nuxt/types'

const path = require('path')

const managerModule: Module = function () {
  const { extendRoutes, addPlugin } = this

  extendRoutes((routes: any) => {
    routes.push({
      path: '/manager',
      component: path.resolve(__dirname, 'pages/Index.vue'),
      children: [
        {
          name: 'manager-index',
          path: '/',
          component: path.resolve(__dirname, 'pages/Home.vue'),
        },
      ],
    })
  })

  addPlugin(path.resolve(__dirname, 'plugins/add-store.ts'))
}

export default managerModule
