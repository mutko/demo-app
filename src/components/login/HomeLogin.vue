<template>
  <router-view/>
</template>

<script>
</script>

<style lang="scss">
.bg-wrapper {
  background: $mainColor url("../../assets/bg.png") no-repeat;
  background-position: right -250px bottom -90px;
  background-size: 70% 60%;
  height: 100%;
}
.btn.btn-custom-sign {
  background: $altColor;
  color: $white;
  border-radius: 2rem;
  padding: 0.55rem 3.5rem;
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    color: $mainColor;
  }
}
</style>
