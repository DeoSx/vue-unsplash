<template>
  <div class="info">
    <Navbar />
    <div class="container">
      <div class="row">
        <h1>Photo page</h1>
        <div class="photo-content">
          <div class="photo-img">
            <img :src="photo.urls.regular" alt />
          </div>
          <p class="photo-text">
            Description:
            <b>{{photo.description || photo.alt_description}}</b>
          </p>
          <p class="photo-text">
            Author:
            <a
              :href="'https://unsplash.com/@' + photo.user.username"
              target="_blank"
            >{{photo.user.name}}</a>
          </p>
          <a :href="photo.links.download" target="_blank">Click me for download</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";

export default {
  data: () => ({
    photo: {}
  }),
  async mounted() {
    const photoId = this.$route.params.id;
    this.photo = await this.$store.dispatch("fetchPictureById", photoId);
  },
  components: {
    Navbar
  }
};
</script>

<style lang="sass">
.photo-img
  text-align: center
  & img
    max-width: 90%
@media (max-width: 800px) 
  .photo-img
    & img
      width: 85%
</style>