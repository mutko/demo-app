<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Features the app</h2>
      <p
        class="section-lead"
      >Writers and stars of Veep have responded incredulously to the news an Australian politician required preinstalled stitches way email client, calendar, mapping program.</p>

      <div class="row pt-5">
        <div class="col-lg-6 order-lg-2 features__content">
          <div class="media pb-4">
            <div class="media-img">
              <img src="../../assets/design.png" width="30" alt="Creative design icon">
            </div>
            <div class="media-body">
              <h5 class="mt-0 pb-3 text-uppercase">Creative design</h5>
              <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
            </div>
          </div>
          <div class="media pb-4">
            <div class="media-img">
              <img src="../../assets/features.png" width="30" alt="Features icon">
            </div>
            <div class="media-body">
              <h5 class="mt-0 pb-3 text-uppercase">Unlimited features</h5>
              <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
            </div>
          </div>
          <div class="media pb-4">
            <div class="media-img">
              <img src="../../assets/friendly.png" width="30" alt="User friendly icon">
            </div>
            <div class="media-body">
              <h5 class="mt-0 pb-3 text-uppercase">User friendly</h5>
              <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
            </div>
          </div>
          <div class="media pb-4 pb-md-0">
            <div class="media-img">
              <img src="../../assets/code.png" width="30" alt="Coding icon">
            </div>
            <div class="media-body">
              <h5 class="mt-0 pb-3 text-uppercase">Clean codes</h5>
              <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara. Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 order-lg-1 text-center text-lg-left features__img">
          <div class="features__bg">
            <img src="../../assets/empty-phone.png" alt="Mobile phone" class="features__bg--img">

            <div
              id="featuresCarousel"
              class="carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="6000"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../../assets/ss1.png" alt="App screenshot 1">
                </div>
                <div class="carousel-item">
                  <img src="../../assets/ss2.png" alt="App screenshot 2">
                </div>
                <div class="carousel-item">
                  <img src="../../assets/ss3.png" alt="App screenshot 3">
                </div>
                <div class="carousel-item">
                  <img src="../../assets/ss4.png" alt="App screenshot 4">
                </div>
                <div class="carousel-item">
                  <img src="../../assets/ss5.png" alt="App screenshot 5">
                </div>
              </div>
            </div>
            <!-- END Carousel -->
          </div>
        </div>
      </div>
      <!-- END Row -->
    </div>
    <!-- END Container -->
  </section>
</template>

<style lang="scss">
.features {
  background: url("../../assets/bg-shape.png") no-repeat bottom;
  background-size: cover;
  padding-top: 3rem;
  padding-bottom: 13rem;
  color: $white;
  .media-img {
    background-color: $white;
    border-radius: 50%;
    &:hover {
      background: $altColor;
    }
  }
  .section-title {
    color: $white;
  }
}
.features__bg {
  position: relative;
  .features__bg--img {
    position: relative;
    top: 0;
    left: 0;
  }
  .carousel {
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    margin: 0 auto;
    @media #{$large} {
      left: 15px;
    }
    .carousel-item img {
      width: 320px;
      height: 560px;
    }
  }
}
</style>


