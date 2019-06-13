<template>
  <footer class="py-5 page-footer">
    <div class="container">
      <div class="row text-center text-md-left">
        <div class="col-sm-9 pb-4 pb-sm-0">
          <p>Copyright © 2018 DEMO, All rights Reserved.</p>
        </div>
        <div class="col-sm-3">
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-square fa-lg"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-pinterest fa-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- END Row -->
    </div>
    <!-- END Container -->
  </footer>
</template>

<style lang="scss">
.page-footer {
  background: $mainColor;
  color: $white;
  .row {
    align-items: center;
  }
  p {
    margin: 0;
  }
  ul {
    margin-bottom: 0;
    a {
      color: $white;
      &:hover {
        color: $altColor;
      }
    }
  }
}
</style>
