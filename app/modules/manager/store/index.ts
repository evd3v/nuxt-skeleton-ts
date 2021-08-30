import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true, stateFactory: true })
export default class ManagerStore extends VuexModule {
  test2 = 1

  @Mutation
  incrementState(newTest: number) {
    this.test2 = newTest
  }

  get allTests() {
    return this.test2 + 2
  }
}
