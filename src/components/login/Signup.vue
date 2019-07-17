<template>
  <div class="bg-wrapper">
    <main class="main-content">
      <div class="inside-wrapper text-center px-3 px-sm-0">
        <h1>DEMO</h1>

        <form @submit.prevent="registerUser" class="sign-form">
          <div class="form-group">
            <input
              v-model.trim="name"            
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              class="form-control"
              required
            >
            <div v-if="$v.name.$dirty">
              <p class="error-message" v-if="!$v.name.minLength">
                Name must be minimum 3 characters
              </p>
              <p class="error-message" v-if="!$v.name.required">
                Name is required
              </p>
            </div>
            <input
              v-model.trim="email"
              @input="$v.email.$touch()"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
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
              id="password"
              placeholder="Password"
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
            
            <input
              v-model.trim="confirm"
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm"
              class="form-control"
              required
            >
             <div v-if="$v.email.$dirty">
              <p class="error-message" v-if="!$v.confirm.sameAsPassword">
                Passwords must be identical.
              </p>
              <p class="error-message" v-if="!$v.confirm.required">
                Password must be repeated
              </p>
            </div>
          </div>
          <button class="btn btn-custom-sign" type="submit">Submit</button>
        </form>
      </div>

    </main>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm: "",
    };
  },
   validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirm: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    registerUser() {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirm
      };
      console.log(userData);
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/http://comtrade.sytes.net/api/auth/signup",
          userData
        )
        .then(res => {
          console.log(res);
          alert("User uccessfully created!");
          router.replace("/welcome");
        })
        .catch(e => {
          console.log(e.response);
          if (e.response.status === 422) {
            alert("The email has already been taken.");
          } else {
            alert("Not valid data. Try again.");
          }
        });
    }
  }
};
</script>

<style lang="scss">
  .error-message {
    color: red;
  }
  .error {
    background: red;
  }
</style>
