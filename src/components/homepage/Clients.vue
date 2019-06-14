<template>
  <section id="clients" class="py-5 clients">
    <div class="container">
      <p class="h2 text-uppercase text-center">Some talk of our clients</p>

      <div class="clients-carousel">
        <carousel :autoplay="true" :nav="false" :responsive="{ 0: { items:1 }, 768: { items:2 } }">
          <article class="clients__review">
            <img src="../../assets/client1.png" alt="User photo" width="100" class="clients__img">
            <div class="clients__title">
              <p class="mb-1 text-center">Oliver Gomez</p>
              <p>CEO of Google</p>
            </div>
            <p
              class="text-left"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.</p>
          </article>

          <article class="clients__review">
            <img src="../../assets/client1.png" alt="User photo" width="100" class="clients__img">
            <div class="clients__title">
              <p class="mb-1 text-center">John Doe</p>
              <p>CEO of Apple</p>
            </div>
            <p
              class="text-left"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.</p>
          </article>

          <article class="clients__review">
            <img src="../../assets/client2.png" alt="User photo" width="100" class="clients__img">
            <div class="clients__title">
              <p class="mb-1 text-center">Rita Watson</p>
              <p>Web designer</p>
            </div>
            <p
              class="text-left"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.</p>
          </article>

          <article class="clients__review">
            <img src="../../assets/client1.png" alt="User photo" width="100" class="clients__img">
            <div class="clients__title">
              <p class="mb-1 text-center">Bra Bozo</p>
              <p>QA Tester</p>
            </div>
            <p
              class="text-left"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.</p>
          </article>

          <article class="clients__review">
            <img src="../../assets/client2.png" alt="User photo" width="100" class="clients__img">
            <div class="clients__title">
              <p class="mb-1 text-center">Rita Watson</p>
              <p>CEO of Google</p>
            </div>
            <p
              class="text-left"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.</p>
          </article>
        </carousel>
      </div>
    </div>
    <!-- END Container -->
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel
  }
};
</script>

<style lang="scss">
.clients {
  background: $mainColor;
  color: $white;
}
.clients__review {
  border: 1px solid $white;
  padding: 4rem 4rem 1rem;
  text-align: center;
  position: relative;
}
.clients__img {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -100%);
  display: block;
  width: 100px;
  height: auto;
}
.clients__title {
  padding: 1rem 0;
}
.clients-carousel {
  .owl-item {
    padding-top: 70px;
    padding-right: 20px;
  }
  .owl-carousel .owl-item img {
    width: auto;
  }

}
.owl-theme .owl-nav [class*="owl-"] {
  text-indent: -99999px;
  border-radius: 50%;
  &::after {
    content: "\f30b";
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    padding-right: 3px;
    vertical-align: middle;
    font-weight: 900;
    text-indent: 0;
    float: left;
  }
}

.owl-theme .owl-nav [class*="owl-prev"]::after {
  content: "\f30a";
}

</style>
