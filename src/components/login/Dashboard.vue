<template>
  <div class="outside-wrapper">
    <div class="logo">
      <router-link to="/" tag="h1">Demo</router-link>
    </div>
    <div class="logout d-flex justify-content-end align-items-center pr-5">
      <button @click="logout" class="btn btn-custom btn-custom--alt">Logout</button>
    </div>
    <div class="color"></div>
    <router-view/>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "Dashboard",
  methods: {
    logout() {
      localStorage.clear();
      router.replace("/signin");
    }
  }
};
</script>

<style lang="scss">
.outside-wrapper {
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
  justify-content: center;
  @media #{$xx-large} {
    grid-template-columns: 350px 1fr;
    grid-template-rows: 120px 1fr;
  }
}
.logo {
  background: $mainColor;
  color: $white;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  @include flexCenter(row);
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 600;
    cursor: pointer;
    @media #{$xx-large} {
      font-size: 3.5rem;
    }
  }
}
.logout {
  background: $mainColor;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.color {
  background: $mainColor;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.btn.btn-custom.btn-custom--alt {
  color: $altColor;
  background: $white;
  font-weight: 600;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: auto;
  padding: 0.6rem 1.25rem;
  text-transform: capitalize;
  &:hover {
    color: $mainColor;
  }
}
</style>

