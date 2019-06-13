<template>
  <section id="screenshots" class="py-5 screen">
    <div class="container">
      <h2 class="section-title">App screenshots</h2>
      <p
        class="section-lead"
      >Most such devices are sold with several apps bundled as pre-installed software, such as a web browser, email client, calendar, mapping program.</p>
    </div>

    <div class="container-fluid pt-5">
      <div class="my-slider">
        <img src="../../assets/ss1.png" alt="App screenshot 1">
        <img src="../../assets/ss2.png" alt="App screenshot 2">
        <img src="../../assets/ss3.png" alt="App screenshot 3">
        <img src="../../assets/ss4.png" alt="App screenshot 4">
        <img src="../../assets/ss5.png" alt="App screenshot 5">
        <img src="../../assets/ss3.png" alt="App screenshot 3">
      </div>
      <div class="text-center pt-5 controls">
        <a href="#ss-carousel" role="button" data-slide="prev" class="mr-3">
          <span class="fa-stack fa-2x arrow arrow--left">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-long-arrow-alt-left fa-stack-1x"></i>
          </span>
          <span class="sr-only">Previous</span>
        </a>
        <a href="#ss-carousel" role="button" data-slide="next">
          <span class="fa-stack fa-2x arrow arrow--right">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-long-arrow-alt-right fa-stack-1x"></i>
          </span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <!-- END Container -->
  </section>
</template>

<style lang="scss">
.arrow {
  font-size: 1.5rem;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  i {
    color: $white;
    cursor: pointer;
  }
  i:first-child {
    color: $altColor;
    text-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
  }
}
.controls {
  a {
    text-decoration: none;
  }
}
</style>


