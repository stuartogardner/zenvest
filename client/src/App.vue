<template>
  <div id="app">
    <router-view/>

    <footer class="footer">
    <div class="container footer-container">
      <div class="content has-text-centered">
        <p>
        <strong>ZenvestLite</strong> // a technical test
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
  name: 'app'
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
</style>
