<template>
  <div class="bg-wrapper">
    <main class="main-content">
      <div class="inside-wrapper text-center px-3 px-sm-0">
        <h1>DEMO</h1>
        <form @submit.prevent="logIn" class="sign-form">
          <div class="form-group">
            <input
              v-model.trim="email"
              @input="$v.email.$touch()"
              type="email"
              name="email"
              placeholder="Email"
              id="username"
              class="form-control"
              required
            >
            <div v-if="$v.email.$dirty">
              <p class="error-message" v-if="!$v.email.email">
                Please enter valid email address
              </p>
              <p class="error-message" v-if="!$v.email.required">
                Email is required
              </p>
            </div>

            <input
              v-model.trim="password"
              @input="$v.password.$touch()"
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              class="form-control"
              required
            >
            <div v-if="$v.password.$dirty">
              <p class="error-message" v-if="!$v.password.minLength">
                Password must be minimum 6 characters
              </p>
              <p class="error-message" v-if="!$v.password.required">
                Password is required
              </p>
            </div>
          </div>
          <button type="submit" class="btn btn-custom-sign">Sign in</button>
        </form>

        <p class="links">
          <router-link to="/nopassword" tag="span">Forgot password?</router-link>
          <br class="d-block d-sm-none">Or if you don't have an account
          <router-link to="/signup" tag="span">Click here!</router-link>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    logIn() {
      const logData = {
        email: this.email,
        password: this.password
      };
      console.log(logData);
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/http://comtrade.sytes.net/api/auth/login",
          logData
        )
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("expirationDate", res.data.expires_at);
          router.replace("/dashboard");
        })
        .catch(e => {
          alert("You have entered an invalid username or password");
        });
    }
  }
};
</script>

<style lang="scss">
.main-content {
  @include flexCenter(column);
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  color: $white;
  @media #{$vertical} {
    height: auto;
    padding-top: 2rem;
  }
  h1 {
    font-weight: 600;
  }
}
.inside-wrapper {
  @include flexCenter(column);
  width: 100%;
}
.sign-form {
  @include flexCenter(column);
  width: 100%;
  .form-group {
    width: 100%;
    padding: 3rem 0 1.5rem;
  }
  .form-control {
    border-radius: 2rem;
    border: none;
    text-align: center;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    &::placeholder {
      color: $altColor;
      font-weight: 600;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: $altColor;
      -webkit-box-shadow: none;
      box-shadow: none;
      background-color: $white;
    }
    &:focus {
      border: none;
      box-shadow: none;
    }
  }
}

.links {
  padding-top: 1.5rem;
  font-weight: 600;
  span {
    color: $altColor;
    font-weight: 400;
    cursor: pointer;
  }
}
</style>
