<template>
  <div>
    hello I'm home
    <nuxt-link :to="{ name: 'users-index' }">back</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
