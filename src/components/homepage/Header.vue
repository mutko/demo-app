<template>
  <header class="py-5 py-md-3 page-header">
    <div class="container">
      <div>
        <b-navbar toggleable="lg" class="navbar">
          <b-navbar-brand href="#" class="navbar-brand text-uppercase">Demo</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" class="navbar-toggler ml-auto">
            <i class="fas fa-bars fa-lg"></i>
          </b-navbar-toggle>

          <button class="btn btn-custom order-lg-3">Login or Register</button>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
              <b-nav-item href="#">Home</b-nav-item>
              <b-nav-item href="#about">About</b-nav-item>
              <b-nav-item href="#features">Features</b-nav-item>
              <b-nav-item href="#pricing">Pricing</b-nav-item>
              <b-nav-item href="#screenshots">Screenshot</b-nav-item>
              <b-nav-item href="#contact">Contact</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <!-- END Container -->
  </header>
</template>


<style lang="scss" scoped>
.navbar {
  a {
    color: white;
  }
}
.navbar-light .navbar-nav .nav-link {
  color: white;
  &:hover {
    font-weight: 700;
    color: white;
  }
}

.navbar-light .navbar-toggler {
  color: white;
  outline: none;
  border: 1px solid white;
  padding: 0.75rem;
  margin-right: 1rem;
  &:hover {
    border-color: blue;
  }
  &:focus {
    outline: none;
  }
}
</style>
