<style lang="scss" scoped>
</style>

<template>
  <v-nav>
    <a href="#!" class="brand-logo" slot="logo">Demonic</a>
    <a v-side-nav:mobile_nav="nav" class="button-collapse hide-on-large-only"><v-icon medium>list</v-icon></a>
    <ul class="right hide-on-med-and-down">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/experience">Experience</router-link></li>
    </ul>
    <v-side-nav id="mobile_nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
      </ul>
    </v-side-nav>
  </v-nav>
</template>

<script>
export default {
  data: function () {
    return {
      nav: {
        edge: 'right'
      }
    }
  }
}
</script>

