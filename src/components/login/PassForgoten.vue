<template>
  <div class="bg-wrapper">
    <div class="full-screen">
      <div class="container">
        <router-link to="/" tag="h1" class="title">DEMO</router-link>

        <main class="main-content--alt">
          <div class="text-center text-md-left">
            <p class="h1 text-capitalize pt-3">Forgot your password?</p>
            <p
              class="py-3"
            >Enter the email address associated with this account. We will email you a link with instructions on how to reset your password.</p>
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              class="form-control"
              required
            >
            <router-link
              to="/passwordsent"
              tag="button"
              class="btn btn-custom-sign"
              type="submit"
              :disabled="email ? false : true"
            >SEND</router-link>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  }
};
</script>

<style lang="scss">
.full-screen {
  height: 100vh;
  color: $white;
}
.title {
  padding-top: 3rem;
  font-size: 3rem;
  font-weight: 600;
  display: inline-block;
  width: auto;
  cursor: pointer;
  @media #{$xx-large} {
    font-size: 5rem;
    padding-top: 5rem;
  }
}
.main-content--alt {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 500px;
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
  @media #{$xx-large} {
    max-width: 600px;
  }
}
</style>
