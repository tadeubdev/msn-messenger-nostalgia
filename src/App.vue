<template>
  <div id="app">
    <router-view id="main" class="md-layout md-gutter md-alignment-center-center"></router-view>
    <!-- Bottom Bar
    <md-bottom-bar md-sync-route md-type="fixed" md-theme="bottom-bar-blue" id="bottom-bar">
      <md-bottom-bar-item to="/" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
      <md-bottom-bar-item to="/photos" exact md-label="Photos" md-icon="photo"></md-bottom-bar-item>
      <md-bottom-bar-item to="/favorites" exact md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
    </md-bottom-bar> -->
  </div>
</template>

<style scoped>
@font-face { font-family: "NotoSans"; src: url("/static/fonts/NotoSans-Regular.ttf") format("truetype"); }
@font-face { font-family: "NotoSans"; src: url("/static/fonts/NotoSans-Bold.ttf") format("truetype"); font-weight: bold; }
@font-face { font-family: "NotoSans"; src: url("/static/fonts/NotoSans-Italic.ttf") format("truetype"); font-style: italic; }
@font-face { font-family: "NotoSans"; src: url("/static/fonts/NotoSans-BoldItalic.ttf") format("truetype"); font-weight: bold; font-style: italic; }

#main {
  min-height: 100vh;
  margin: auto;
  padding: 15px;
  background-image: url('/static/image/background-top-blue.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 300%;
  font-family: NotoSans, sans-serif;
  color: #555555;
}
</style>

<script>
export default {
  name: 'App'
}
</script>
