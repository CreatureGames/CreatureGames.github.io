<template>
  <nav>
    <div>
      <nuxt-img
        src='/creature-icon.png'
        alt='The Creature logo'
        width='64'
        height='64'
      />
      <div id='nav-title'>Creature Games Studio</div>
    </div>
    <div id='nav-links'>
      <nuxt-link to='/'>Home</nuxt-link>
      <nuxt-link to='/about'>About</nuxt-link>
    </div>
  </nav>
</template>

<style lang='sass' scoped>
nav
  display: flex
  justify-content: space-between
  align-items: center

  img
    width: 2em
    height: 2em
    margin-right: 1em

  #nav-title
    display: inline-block
    color: white
    font-size: 2em
    font-weight: 700

  #nav-links
    display: flex
    gap: 1em
</style>