<template>
  <div>
    <Navbar />
    <div class="container">
      <h2>History of your inquiries</h2>
      <ul v-if="history.length" class="collection">
        <li class="collection-item" v-for="h of history" :key="h.date">
          <p>
            <b>{{h.name}}</b>
          </p>
          <p>
            <b>{{h.date}}</b>
          </p>
          <button class="btn red btn-small waves-effect" :id="h.date" @click="removeStory">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";

export default {
  computed: {
    history() {
      return this.$store.getters.history;
    }
  },
  methods: {
    removeStory(event) {
      const id = event.target.getAttribute("id");
      this.$store.dispatch("removeStoryById", id);
    }
  },
  mounted() {},
  components: {
    Navbar
  }
};
</script>

<style lang="sass" scoped>
.collection
  margin: 0 auto
  max-width: 700px 
.collection-item
  padding: 0 10px
  display: flex
  align-items: center
  justify-content: space-between
  & p
    width: 35%
</style>