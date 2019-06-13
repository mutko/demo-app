<template>
  <section id="pricing" class="py-5 pricing">
    <div class="container">
      <h2 class="section-title">Pricing plan</h2>
      <p
        class="section-lead"
      >Writers and stars of Veep have responded incredulously to the news an Australian politician required preinstalled stitches way email client, calendar, mapping program.</p>

      <div class="row pt-5">
        <!-- Card -->
        <div class="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
          <div class="card">
            <div class="card-body">
              <p class="card-title h4">Basic</p>
              <p class="price__value">$00</p>
              <p class="card-text font-weight-bold">Limited access</p>
              <div class="py-3 card__info">
                <p>100 MB Disk Space</p>
                <p>2 Sub domains</p>
                <p>5 Email accounts</p>
                <p>No licence</p>
                <p>No phone & mail support</p>
              </div>
              <a href="#" class="btn btn-custom btn-custom--small">Purchase</a>
            </div>
          </div>
          <!-- END Card -->
        </div>
        <!-- END Col -->

        <!-- Card -->
        <div class="col-sm-8 offset-sm-2 col-md-4 offset-md-0 py-4 py-md-0">
          <div class="card">
            <div class="card-body">
              <p class="card-title h4">Proffesional</p>
              <p class="price__value">$12</p>
              <p class="card-text font-weight-bold">Limited access</p>
              <div class="py-3 card__info">
                <p>100 MB Disk Space</p>
                <p>2 Sub domains</p>
                <p>5 Email accounts</p>
                <p>1 year licence</p>
                <p>Phone & mail support</p>
              </div>
              <a href="#" class="btn btn-custom btn-custom--small">Purchase</a>
            </div>
          </div>
          <!-- END Card -->
        </div>
        <!-- END Col-->

        <!-- Card -->
        <div class="col-sm-8 offset-sm-2 col-md-4 offset-md-0">
          <div class="card">
            <div class="card-body">
              <p class="card-title h4">Business</p>
              <p class="price__value">$22</p>
              <p class="card-text font-weight-bold">Limited access</p>
              <div class="py-3 card__info">
                <p>100 MB Disk Space</p>
                <p>2 Sub domains</p>
                <p>5 Email accounts</p>
                <p>2 year licence</p>
                <p>Phone & mail support</p>
              </div>
              <a href="#" class="btn btn-custom btn-custom--small">Purchase</a>
            </div>
          </div>
          <!-- END Card -->
        </div>
        <!-- END Col -->
      </div>
      <!-- END Row -->
    </div>
    <!-- END Container -->
  </section>
</template>

<style lang="scss">
.pricing {
  background: $altBgColor;
}
.card {
  text-align: center;
  @media #{$x-large} {
    padding: 2rem 1.5rem;
  }
  border: 2px solid $mainColor;
  border-radius: 20px;
  transition: transform 0.5s;
  &:hover {
    @media #{$medium} {
      transform: scale(1.1);
      background: $mainColor;
      color: $white;
      border-radius: 0;
      .price__value {
        color: $white;
      }
      .btn-custom--small {
        color: $altColor;
      }
    }
  }
}
.card__info {
  p {
    margin-bottom: 0.5rem;
  }
}
.price__value {
  color: $mainColor;
  font-size: 2rem;
  padding: 0 3rem;
}
</style>

