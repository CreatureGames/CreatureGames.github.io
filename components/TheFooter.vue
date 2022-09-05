<template>
  <footer>
    <div>
      <a @click='showAlert("🚧 Coming Soon 🚧")'>Steam</a>
      <a @click='showAlert("🚧 Coming Soon 🚧")'>Itch.io</a>
      <a @click='showAlert("🚧 Coming Soon 🚧")'>Insta</a>
    </div>
    <div>© Creature Games Studio {{year}}</div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
  methods: {
    showAlert(msg) {
      alert(msg)
    }
  }
}
</script>

<style lang='sass' scoped>
footer
  &, div
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    gap: 1em

    @include break-sm
      flex-direction: row
</style>