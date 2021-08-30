import { Plugin } from '@nuxt/types'
import usersStore from '@/modules/users/store/index'

const addStorePlugin: Plugin = ({ store }) => {
  store.registerModule('users', usersStore)
}

export default addStorePlugin
