<template>
  <nav>
    <div>
      <nuxt-img
        src='/creature.gif'
        alt='The Creature logo'
        width='64'
        height='64'
      />
      <h1>Creature Games Studio</h1>
    </div>
    <div>
      <nuxt-link to='/'>Home</nuxt-link>
      <nuxt-link to='/about'>About</nuxt-link>
    </div>
  </nav>
</template>

<style lang='sass' scoped>
nav
  &, div
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center

  &, div:last-of-type
    gap: 1rem

  img
    width: 5rem
    height: 5rem
    image-rendering: pixelated

  h1
    text-align: center

@include break-sm
  nav
    &, div
      flex-direction: row

    div:first-of-type
      gap: 1rem

    img
      width: 3rem
      height: 3rem

</style>