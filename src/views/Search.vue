<template>
  <div class="search">
    <Navbar />
    <SearchList />
    <div class="container">
      <div class="row search-content">
        <p>Write picture name you want to search. (Example: animals, city, nature)</p>
        <form @submit.prevent="findPictures">
          <p class="center">
            <b>{{textError}}</b>
          </p>
          <div class="input-field">
            <input id="last_name" type="text" class="validate" v-model="name" />
            <label for="last_name">Picture name</label>
          </div>
          <div class="button">
            <button type="submit" class="btn blue waves-effect waves-light">Search</button>
          </div>
        </form>

        <masonry :cols="{default: 3, 768: 2, 450: 1}" class="collection">
          <div class="search-li" v-for="p of pictures" :key="p.id">
            <img :src="p.urls.small" class="search-img" alt />
            <div class="photo-info">
              <p class="profile">
                <img :src="p.user.profile_image.medium" alt />
                <b>{{p.user.name}}</b>
              </p>
              <div class="search-footer">
                <div class="search-footer-icon">
                  <i class="large material-icons" @click="addFavorite(p), toast()">favorite</i>
                  <i
                    class="large material-icons"
                    @click="imgUrl(p.urls.small), popup = true"
                  >zoom_in</i>
                </div>
                <div class="search-footer-item">
                  <router-link
                    :to="'/info/' + p.id"
                    class="btn btn-small waves-effect waves-light"
                  >More</router-link>
                </div>
              </div>
            </div>
          </div>
        </masonry>
        <Modal v-if="popup" :url="url" @closeModal="closePopup" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/app/Navbar";
import Modal from "@/components/Modal";
import SearchList from "@/components/SearchList";

export default {
  name: "search",
  data: () => ({
    name: "",
    textError: "",
    popup: false,
    url: ""
  }),
  mounted() {},
  computed: {
    pictures() {
      return this.$store.getters.pictures.results;
    }
  },
  components: {
    Navbar,
    Modal,
    SearchList
  },
  methods: {
    async findPictures() {
      await this.$store.dispatch("fetchPictures", this.name);

      if (this.name === "") {
        this.textError = "Photos not found";
      } else {
        const date = new Date();
        this.$store.dispatch("writeHistory", {
          name: this.name,
          date: date.toLocaleString()
        });
      }

      !this.pictures.length
        ? (this.textError = "Photos not found")
        : (this.textError = "");

      this.name = "";
    },
    imgUrl(url) {
      this.url = url;
    },
    closePopup(modal) {
      this.popup = modal.popup;
    },
    addFavorite(photo) {
      this.$store.dispatch("addPhotoToFavorite", photo);
    },
    toast() {
      M.toast({ html: "Photo added to your favorite" });
    }
  }
};
</script>

<style lang="sass" scoped>
.button
  margin-bottom: 20px
.search-content 
  margin: 0 auto
  display: flex
  flex-direction: column 
.search-img 
  display: block
  width: 100%
  min-height: 200px
.collection 
  display: flex
  justify-content: space-between
  margin: 0 auto
  border: none
.search-li
  margin-top: 5px
  position: relative
  width: 98%
  border-radius: 10px
  overflow: hidden
  text-align: center
  &:hover .search-img 
    filter: blur(5px)
    transition: all 0.1s
  &:hover .photo-info
    display: flex
  & .photo-info
    background: rgba(0, 0, 0, 0.2)
    display: none
    position: absolute
    align-items: center
    justify-content: center
    flex-direction: column
    color: #fff
    width: 100%
    height: 100%
    border-radius: 10px
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
.profile
  width: 180px
  margin: 10px auto 0
  display: flex
  justify-content: space-around
  flex-direction: column
  align-items: center
  & img 
    width: 50px
    height: 50px
    border-radius: 15%
    border: 1px solid #fff
.search-footer
  position: relative
.search-footer-item
  margin-top: 35px
.search-footer-icon
  display: flex
  padding-top: 5px
  position: absolute
  left: 50%
  transform: translateX(-50%)
  i
    font-size: 20px
    cursor: pointer
    transition: all 0.1s
    &:hover
      font-size: 24px
.popup-search
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%  
</style>