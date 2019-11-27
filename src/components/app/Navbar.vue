<template>
  <div>
    <nav class="grey darken-4">
      <div class="nav-wrapper">
        <ul>
          <router-link tag="a" class="logo" to="/">
            <i class="material-icons">image</i>
            <a href="#" class="text-link">ImageStock</a>
          </router-link>
        </ul>
        <ul id="nav-mobile" class="right nav-mobile">
          <router-link to="/" tag="a" class="link" active-class="active-link" exact>
            <i class="material-icons">search</i>
            <a href="#" class="text-link">Search</a>
          </router-link>
          <router-link to="/favorite" tag="a" class="link" active-class="active-link">
            <i class="material-icons">favorite</i>
            <a href class="text-link">Favorite</a>
          </router-link>
          <router-link to="/history" tag="a" class="link" active-class="active-link">
            <i class="material-icons">history</i>
            <a href class="text-link">History</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="sass" scoped>
nav
  padding: 0 20px
.link
  display: flex
  align-items: center
  position: relative
  
.nav-wrapper
  display: flex
  align-items: center
  justify-content: space-between
.nav-mobile 
  display: flex
  justify-content: space-between
.logo
  display: flex
.active-link
  &::before
    position: absolute
    content: ''
    bottom: 10px
    right: 25px
    width: 25px
    border: 1px solid #fff

@media (max-width: 600px)
  .text-link
    display: none
  .nav-mobile 
    width: 150px
  .link 
    &:hover::before
      display: none
</style>