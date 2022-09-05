<template>
  <nav>
    <div>
      <nuxt-img
        src='/creature.gif'
        alt='The Creature logo'
        width='64'
        height='64'
      />
      <title>Creature Games Studio</title>
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
    gap: 1em

  img
    width: 6em
    height: 6em
    image-rendering: pixelated

  title
    display: inline-block
    font-size: 2em
    text-align: center

@include break-sm
  nav
    &, div
      flex-direction: row
      gap: 1em

    img
      width: 3em
      height: 3em
</style>