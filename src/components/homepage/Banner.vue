<template>
  <section class="pb-5 banner">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 order-sm-2 pb-5 pb-sm-0 banner__content">
          <div class="banner__text">
            <p class="h1 text-capitalize">The best app to increase your productivity</p>
            <p
              class="py-3 py-md-5"
            >A mobile app is a computer program designed to run on a mobile device such as a phone/tablet or watch.</p>
          </div>
          <div class="banner__links">
            <div class="pb-3 pb-lg-0 pr-lg-3">
              <a href="https://www.apple.com/ios/app-store/">
                <div class="media">
                  <div class="media-img">
                    <img src="../../assets/app-store.png" alt="Apple store icon" width="30">
                  </div>
                  <div class="media-body">
                    <p>
                      Get it from
                      <br>
                      <span class="font-weight-bold">Appstore</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div>
              <a href="https://play.google.com/store/">
                <div class="media">
                  <div class="media-img">
                    <img src="../../assets/play-store.png" width="30" alt="Creative design icon">
                  </div>
                  <div class="media-body">
                    <p>
                      Get it from
                      <br>
                      <span class="font-weight-bold">Playsore</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          class="order-sm-1 col-sm-6 col-lg-4 offset-lg-1 col-xl-6 offset-xl-0 text-center text-sm-left banner__img"
        >
          <img src="../../assets/phone.png" alt="App on mobile phone">
        </div>
      </div>
      <!-- END Row -->
    </div>
    <!-- END Container -->
  </section>
</template>

<style lang="scss">
.wrapper {
  background: url("../../assets/eclipse.png") no-repeat,
    url("../../assets/bg-rect.png") no-repeat;
  background-position: right -540px top -340px, center bottom;

  @media #{$x-large} {
    background-position: right -510px top -320px, left -600px bottom;
  }
  @media all and (min-width: 1920px) {
    width: 100%;
    height: 100%;
    background-position: right -190px top -300px, left -600px bottom;
  }
  .bg-eclipse {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.banner {
  .row {
    align-items: center;
  }
}
.banner__text {
  text-align: center;
  @media #{$small} {
    text-align: right;
  }
  color: $white;
}
.banner__links {
  text-align: center;
  @media #{$small} {
    text-align: right;
  }
  @media #{$large} {
    display: flex;
    justify-content: flex-end;
  }
  a {
    display: inline-block;
    background: $white;
    color: #000;
    border-radius: 3rem;
    text-decoration: none;
    text-align: left;
    width: 175px;
    &:hover {
      color: $altColor;
    }
    .media {
      align-items: center;
    }
    .media-img {
      padding: 1rem 0 1rem 1.75rem;
      margin-right: 1rem;
    }
    p {
      margin-bottom: 0;
      font-size: 0.8rem;
      span {
        font-size: 1rem;
      }
    }
  }
}
.banner__img {
  img {
    max-width: 50%;
    @media #{$small} {
      max-width: 100%;
    }
  }
}
</style>
