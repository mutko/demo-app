<template>
  <section id="about" class="py-5 about-app">
    <div class="container">
      <h2 class="section-title">About the app</h2>
      <p
        class="section-lead"
      >Writers and stars of Veep have responded incredulously to the news an Australian politician required preinstalled stitches way email client, calendar, mapping program.</p>
      <div class="row pt-5">
        <div class="col-md-4">
          <div class="about-app__card">
            <div class="about-app__icon">
              <div class="about-app__wrapper">
                <img src="../../assets/supp.png" width="50" alt="Support icon">
              </div>
            </div>
            <div class="about-app__body">
              <p class="about-app__title">24/7 Support</p>
              <p
                class="about-app__text"
              >Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 my-4 my-md-0">
          <div class="about-app__card">
            <div class="about-app__icon">
              <div class="about-app__wrapper">
                <img src="../../assets/privacy.png" width="50" alt="Data privacy icon">
              </div>
            </div>
            <div class="about-app__body">
              <p class="about-app__title">Data privacy</p>
              <p
                class="about-app__text"
              >Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="about-app__card">
            <div class="about-app__icon">
              <div class="about-app__wrapper">
                <img src="../../assets/down.png" width="30" alt="Download icon">
              </div>
            </div>
            <div class="about-app__body">
              <p class="about-app__title">Easy download</p>
              <p
                class="about-app__text"
              >Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- END Row -->
    </div>
    <!-- END Container -->
  </section>
</template>

<style lang="scss">
.about-app__card {
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: 100%;
}
.about-app__wrapper {
  display: inline-block;
  background: $altBgColor;
  padding: 5px;
  width: 60px;
  height: 60px;
  transform: rotate(45deg);
  transition: all 0.5s;
  &:hover {
    background: $altColor;
  }
  img {
    transform: rotate(-45deg);
  }
}

.about-app__title {
  font-weight: bold;
  color: #000;
  padding: 2rem 0;
  margin: 0;
}
</style>

