<template>
  <div>
    hello I'm home
    <nuxt-link :to="{ name: 'manager-index' }">{{ text }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {
  @Prop({ type: String, default: '123', required: true })
  text!: string
}
</script>
