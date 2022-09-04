<template>
    <nuxt-content :document='doc' />
</template>

<script>
export default {
  async asyncData({$content}) {
    const doc = await $content('Home').fetch()
    return { doc }
  }
}
</script>