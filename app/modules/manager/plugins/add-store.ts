import { Plugin } from '@nuxt/types'
import managerStore from '@/modules/manager/store/index'

const addStorePlugin: Plugin = ({ store }) => {
  store.registerModule('manager', managerStore)
}

export default addStorePlugin
