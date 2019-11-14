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
      <section id="profile">
        <div id="profile-pic" class="profile-green">
          <div id="profile-pic-center"></div>
        </div>
        <form v-on:submit.prevent id="profile-form">
          <div class="profile-form-group">
            <input type="email" class="profile-form-input" placeholder="email@email.com" required v-model="email" ref="email" />
          </div>
          <div class="profile-form-group">
            <input type="password" class="profile-form-input" placeholder="********" required v-model="password" ref="password" />
          </div>
          <a href="javascript:void(0)" class="profile-form-link">Esqueci minha senha</a>
          <div id="profile-form-buttons">
            <button class="profile-form-button" v-on:click="doLogin()">Entrar</button>
            <button class="profile-form-button" v-on:click="cancelLogin()">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  margin: 10px auto;
  padding: 30px 15px;
}

#container-header {
  line-height: 25px;
}

#container-header h3 {
  margin: 0;
  margin-bottom: 2px;
  font-weight: 100;
  font-size: 22px;
  text-align: center;
}

#container-header h3 small {
  display: block;
  font-style: italic;
  opacity: .7;
}

#profile-pic {
  width: 110px;
  height: 110px;
  margin: 15px auto;
  border-radius: 10px;
  border: 6px solid #ccc;
}
#profile-pic-center {
  width: 110px;
  height: 110px;
  margin: -6px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/static/image/user.png');
}

#profile-form {
  margin-top: 15px;
}

.profile-form-group {
  margin-bottom: 15px;
}

.profile-form-input {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px 0;
  border-radius: 2px;
}

#profile-form-buttons {
  margin-top: 10px;
}

.profile-form-button {
  margin: 10px;
  margin-left: 0;
  padding: 4px 13px;
  cursor: pointer;
}

#profile-form-link {
  display: block;
  font-size: 12px;
  text-decoration: none;
  color: #0ba2de !important;
}

@media screen and (min-width: 761px) {
  #container {
    width: 400px;
  }
  #container-header * {
    text-align: left !important;
  }
  #profile:after {
    content: ' ';
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    clear: both;
  }
  #profile-pic {
    float: left;
  }
  #profile-form {
    width: 65%;
    float: right;
    padding-top: 10px;
  }
}
</style>

<script>
export default {

  name: 'Home',

  data() {
    return {
      email: '',
      password: '',
      regexEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
    }
  },

  methods: {

    doLogin() {
      if(!this.email.length || !this.regexEmail.test(this.email)) {
        console.log('Insira um email válido!');
        return;
      }
    },

    cancelLogin() {
      this.email    = '';
      this.password = '';
    },

  }

}
</script>
