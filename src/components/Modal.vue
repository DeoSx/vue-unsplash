<template>
  <div class="modal-block" @click="closeModal">
    <div class="modal-img">
      <i class="large material-icons" @click="closeModal">close</i>
      <img :src="url" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", {
        popup: false
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.modal-block
  background: rgba(0, 0, 0, 0.2)
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  top: 0
  right: 0
  height: 100%
  width: 100%
.modal-img
  position: relative
  text-align: center
  & img
    min-width: 95%
    min-height: 100%
  & i
    background: rgba(255, 255, 255, 0.4)
    display: block
    position: absolute
    right: 20px
    top: 15px
    font-size: 35px
    border-radius: 50%
    transition: 0.2s all
    cursor: pointer
    &:hover
      color: red
</style>