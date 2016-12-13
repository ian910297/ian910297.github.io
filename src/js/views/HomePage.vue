<style>
.disappear {
  overflow: hidden;
}
</style>

<template>
  <div ref="introduction" v-on:click="disappear" class="disappear">
    Home Page
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  methods: {
    disappear: function (el) {
      Velocity(this.$refs.introduction, {width: '75px'}, {duration: 2000})
      Velocity(this.$refs.introduction, {height: '0px'}, {duration: 2000})
    }
  }
}

</script>
