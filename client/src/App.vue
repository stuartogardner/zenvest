<template>
  <div id="app">

    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <router-link class="navbar-item navbar-title" to="/">
        Zenvest
      </router-link>

      <router-link v-if="path!=='/'" class="navbar-item" to="/">
        Your Deals
      </router-link>

    </div>
    </nav>

    <router-view/>

    <footer class="footer">
    <div class="container footer-container">
      <div class="content has-text-centered">
        <p>
        <strong>ZenvestLite</strong> // A Technical Test
        </p>
        <icon class="icon is-medium" name="bicycle"></icon>
        <p>By Stuart Gardner // <a href="mailto:stuartogardner@gmail.com">stuartogardner@gmail.com</a></p>
      </div>
    </div>
  </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      path:'',
    };
  },
  created(){
    this.path = this.$route.path;
  },
  beforeUpdate: function() {
    this.path = this.$route.path;
    console.log('the page is', this.page)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  position: fixed !important; top: 0; left: 0; right: 0; z-index: 10;
}

.navbar-title{
  font-weight: bold;
  font-size: 1.5em;
}

.footer{
  height: 200px;
}
</style>
