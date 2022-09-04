<template>
    <nuxt-content :document='doc' />
</template>

<script>
export default {
  async asyncData({$content}) {
    const doc = await $content('About').fetch()
    return { doc }
  }
}
</script>