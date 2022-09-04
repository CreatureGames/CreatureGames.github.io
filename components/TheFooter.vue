<template>
  <footer>
    © Creature Games Studio {{year}}
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>