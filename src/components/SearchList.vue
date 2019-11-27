<template>
  <div class="grey darken-4 search-list">
    <h2>Search</h2>
    <ul>
      <li v-for="link of links" :key="link.name" @click="valueLink">{{link.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "Wallpapers" },
      { name: "Textures & Patterns" },
      { name: "Nature" },
      { name: "Current Events" },
      { name: "Architecture" },
      { name: "Business & Work" },
      { name: "Film" },
      { name: "Animals" },
      { name: "Travel" },
      { name: "Fashion" },
      { name: "Food & Drink" },
      { name: "Spirituality" },
      { name: "Experimental" },
      { name: "People" },
      { name: "Health" },
      { name: "Art & Culture" }
    ],
    value: ""
  }),
  methods: {
    async valueLink(event) {
      this.value = event.target.textContent;
      await this.$store.dispatch("fetchPictures", this.value);
    }
  }
};
</script>

<style lang="sass" scoped>
.search-list
  padding: 20px 0
  text-align: center
  color: #fff
  & ul 
    display: flex
    justify-content: center
    flex-wrap: wrap
  & li
    margin: 5px 5px
    cursor: pointer
    border-bottom: 1px solid transparent
    &:hover
      border-bottom: 1px solid #fff
h2
  margin: 0
</style>