import * as userStore from '../store/'

export default ({ store }) => {
  store.registerModule('users', userStore)
}
