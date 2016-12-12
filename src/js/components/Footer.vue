<style lang="sass">
.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>

<template>
  <div class="footer">
    <div class="copyright">&copy;2016-{{ year }} Chi Chung Yi All Rights Reserved</div>
  </div>
</template>

<script>
var currentYear = new Date().getFullYear()

export default {
  data: function() {
    return {
      year: currentYear
    }
  }
}
</script>

