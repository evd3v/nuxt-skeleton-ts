import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true, stateFactory: true })
export default class UsersStore extends VuexModule {
  test = 1

  @Mutation
  incrementState(newTest: number) {
    this.test = newTest
  }

  get allTests() {
    return this.test + 1
  }
}
