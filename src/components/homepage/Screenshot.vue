<template>
  <section id="screenshots" class="py-5 screen">
    <div class="container">
      <h2 class="section-title">App screenshots</h2>
      <p
        class="section-lead"
      >Most such devices are sold with several apps bundled as pre-installed software, such as a web browser, email client, calendar, mapping program.</p>
    </div>

    <div class="container-fluid pt-5">
      <carousel
        :autoplay="true"
        :loop="true"
        :dots="false"
        :nav="true"
        :responsive="{ 0:{items:2}, 768:{items:3}, 900:{items:5}}"
      >
        <img src="../../assets/ss1.png" alt="App screenshot 1">
        <img src="../../assets/ss2.png" alt="App screenshot 2">
        <img src="../../assets/ss3.png" alt="App screenshot 3">
        <img src="../../assets/ss4.png" alt="App screenshot 4">
        <img src="../../assets/ss5.png" alt="App screenshot 5">
        <img src="../../assets/ss3.png" alt="App screenshot 3">
      </carousel>
    </div>
    <!-- END Container -->
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel }
};
</script>


<style lang="scss">
.owl-theme .owl-nav [class*="owl-"] {
  transition: all 0.5s;
  color: $white;
  cursor: pointer;
  background: $altColor;
  &:hover {
    transform: scale(1.1);
  }
}
</style>


