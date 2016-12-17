<style lang="scss">
.divider {
  height: 1px;
  overflow: hidden;
  background-color: #e0e0e0;
}
.hero {
  height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  background: url(assets/feather.jpg);
}
#toast-container {
  top: auto !important;
  bottom: 10%;
}
</style>

<template>
  <div id="Home">
    <div class="hero">
      <div class="hide-on-med-and-up">
        <h4 class="center">認識我</h4>
        <h4 class="center">是你一生</h4>
        <h4 class="center">最大的榮幸</h4>

        <div class="row center">
          <button class="btn" v-on:click="WhoAmI">Who Am I?</button>
        </div>
      </div>
      <div class="hide-on-small-only">
        <h2 class="center">「認識我，是你一生最大的榮幸。」</h2>

        <div class="row center">
          <button class="btn" v-on:click="WhoAmI">Who Am I?</button>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="container">
      <div class="row">
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  methods: {
    disappear: function (el) {
      Velocity(this.$refs.introduction, {width: '75px'}, {duration: 2000})
      Velocity(this.$refs.introduction, {height: '0px'}, {duration: 2000})
    },
    WhoAmI: function () {
      console.log({text: 'hi', delay: 4000})
    }
  }
}
</script>
