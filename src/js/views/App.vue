<style lang="scss">
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

</style>

<template>
  <div>
    <div class="header">
      <header-bar></header-bar>
    </div>
    <div class="container">
      <div class="pages">
        <router-view></router-view>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import Footer from '../components/Footer'

export default {
  components: {
    'header-bar': HeaderBar,
    'my-footer': Footer
  }
}
</script>

