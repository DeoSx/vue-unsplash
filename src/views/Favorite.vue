<template>
  <div class="favorite">
    <Navbar />
    <div class="container">
      <div class="row">
        <h2>Your favorite photos</h2>
        <div class="favorite-item" v-for="f of favorite" :key="f.id">
          <img :src="f.urls.small" alt />
          <div class="favorite-item-content">
            <a :href="'https://unsplash.com/@'+f.user.username" target="_blank">{{f.user.name}}</a>
            <p>{{f.description || f.alt_description}}</p>
            <a :href="f.links.download" target="_blank">
              <i class="large material-icons">file_download</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/app/Navbar";

export default {
  computed: {
    favorite() {
      return this.$store.getters.favorite;
    }
  },
  components: {
    Navbar
  }
};
</script>

<style lang="sass">
.favorite-item
  margin: 20px auto 0
  text-align: center
  & img
    border-radius: 10px
    max-width: 100%
.favorite-item-content
  & p
    margin: 0
  i
    cursor: pointer
    font-size: 24px
</style>

