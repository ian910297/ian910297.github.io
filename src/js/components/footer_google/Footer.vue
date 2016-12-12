<template>
  <footer class="footer">
    <div class="logo"></div>
    <ul class="links">
      <li v-for="link in links"><a target="_blank" :href="link.url" v-text="link.text"></a></li>
    </ul>
  </footer>
</template>

<script>
  import 'bootstrap/scss/bootstrap-reboot.scss'
  export default {
    props: {
      links: {
        default () {
          return [
            {
              url: 'https://www.google.com/about/',
              text: 'About Google'
            },
            {
              url: 'https://www.google.com/policies/privacy/',
              text: 'Privacy'
            },
            {
              url: 'https://www.google.com/policies/terms/regional.html',
              text: 'Terms'
            }
          ]
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
footer {
  background-color: #f0f0f0;
  color: #9e9e9e;
  padding: 40px 40px;
  font-family: "Montserrat-Regular","RobotoDraft","Helvetica",arial,sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    flex: 100%;
    height: 50px;
    background-size: contain;
    background: url(assets/demonic.png) no-repeat center;
    max-width: 300px;
  }
  .links{
    margin: 0;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: space-between;
    list-style: none;
    li{
      &+li{
        margin-left: 25px;
      }
      a{
        border-bottom: solid 1px;
        color: #b9b9b9;
        text-decoration: none;
        &:hover{
          color: rgba(90,90,90,0.95);
        }
      }
    }
  }
}
</style>
