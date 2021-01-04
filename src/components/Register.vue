<template>
  <div>
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel green Black-text center">
          <h3>Register</h3>
          <form>
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="text" id="email" v-model="email">
              <label class="black-text" for="email">Email</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password" v-model="password">
              <label class="black-text" for="password">password</label>
            </div>
            <button v-on:click="register" class="btn btn-large grey lighten-4 black-text">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "register",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert(`Account created for ${user.email}`);
          this.$router.push('/');
        },
        err => {
          alert(err.message)
        });
      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>
