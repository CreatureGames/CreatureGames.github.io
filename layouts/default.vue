<template>
  <div id='content'>
    <TheNavbar />
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<style lang='sass' scoped>
#content
  max-width: 50em
  margin: auto

  display: flex
  flex-direction: column
  gap: 1em
</style>