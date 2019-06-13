<template>
  <div class="bg-wrapper">
    <main class="main-content">
      <div class="inside-wrapper text-center px-3 px-sm-0">
        <h1>DEMO</h1>

        <form @submit.prevent="registerUser" class="sign-form">
          <div class="form-group">
            <input
              v-model="name"
              type="text"
              name="name"
              placeholder="Name"
              class="form-control"
              required
            >
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="Email"
              class="form-control"
              required
            >
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="Password"
              class="form-control"
              required
            >
            <input
              v-model="confirm"
              type="password"
              name="confirm"
              placeholder="Confirm"
              class="form-control"
              required
            >
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

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm: ""
    };
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
        .post("/auth/signup", userData)
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

<style>
</style>
