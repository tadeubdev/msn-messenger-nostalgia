<template>
  <div>
    <div id="container">
      <section id="container-header">
        <h3>Entrar no</h3>
        <h3>
          Windows Live <strong>Messenger</strong>
          <small>um aplicativo não oficial <a href="https://github.com/tadeubarbosa/msn-messenger-nostalgia" target="_blank">(leia mais)</a></small>
        </h3>
      </section>
      <section id="profile" class="profile-green">
        <div id="profile-center"></div>
      </section>
      <section id="form">
        <md-field>
          <label>Email</label>
          <md-input v-model="email" ref="email"></md-input>
        </md-field>
        <md-field>
          <label>Senha</label>
          <md-input v-model="password" ref="password"></md-input>
        </md-field>
        <md-button class="md-raised md-default" style="margin:15px auto;display:block;">Entrar</md-button>
      </section>
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  margin: 10px auto;
  padding: 30px 15px;
  border: 1px solid #ddd;
  background: rgba(255,255,255,.4);
}

@media screen and (min-width: 761px) {
  #container {
    width: 40%;
  }
}

#container-header h3 {
  margin: 0;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
}

#container-header h3 small {
  display: block;
  font-style: italic;
  opacity: .7;
}

@media screen and (min-width: 761px) {
  #container-header {
    text-align: right;
  }
}

#profile {
  width: 110px;
  height: 110px;
  margin: 15px auto;
  border-radius: 2px;
  border: 6px solid #ccc;
}

#profile-center {
  width: 110px;
  height: 110px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/static/image/user.png');
}
</style>

<script>
export default {

  name: 'Home',

  data() {
    return {
      email: null,
      password: null,
    }
  }

}
</script>
