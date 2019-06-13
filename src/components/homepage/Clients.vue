<template>
  <section id="clients" class="py-5 clients">
    <div class="container">
      <p class="h2 text-uppercase text-center">Some talk of our clients</p>

      <div class="clients-carousel">


        <carousel :autoplay="true" :dots="false" :responsive="{ 0: { items:1 }, 768: { items:2 } }">
        <div class="tns-item">
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
        </div>
        <div class="tns-item">
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
        </div>
        <div class="tns-item">
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
        </div>
        <div class="tns-item">
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
        </div>
        <div class="tns-item">
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
        </div>
        <div class="tns-item">
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
        </div>
      <div class="text-center pt-5 controls">
        <template slot="prev">
          <span class="fa-stack fa-2x arrow arrow--left">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-long-arrow-alt-left fa-stack-1x"></i>
          </span>
        </template>
        <template slot="next">
          <span class="fa-stack fa-2x arrow arrow--right">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-long-arrow-alt-right fa-stack-1x"></i>
          </span>
        </template>
      </div>
    </carousel>


        <div class="tns-item">
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
        </div>
        <div class="tns-item">
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
        </div>
        <div class="tns-item">
          <article class="clients__review">
            <img src="../../assets/client1.png" alt="User photo" width="100" class="clients__img">
            <div class="clients__title">
              <p class="mb-1 text-center">Branko Boz</p>
              <p>CEO of Google</p>
            </div>
            <p
              class="text-left"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.</p>
          </article>
        </div>
        <div class="tns-item">
          <article class="clients__review">
            <img src="../../assets/client1.png" alt="User photo" width="100" class="clients__img">
            <div class="clients__title">
              <p class="mb-1 text-center">Marko Markovic</p>
              <p>CEO of Google</p>
            </div>
            <p
              class="text-left"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,good.</p>
          </article>
        </div>
        <div class="tns-item">
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
        </div>
      </div>
    </div>
    <!-- END Container -->
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  components: { 
    carousel
  }
}
</script>

<style lang="scss">
.clients {
  background: $mainColor;
  color: $white;
}
.tns-nav {
  text-align: center;
  margin: 10px 0;
}
.tns-nav > [aria-controls] {
  width: 9px;
  height: 9px;
  padding: 0;
  margin: 0 5px;
  border-radius: 50%;
  background: #ddd;
  border: 0;
}
.tns-nav > .tns-nav-active {
  background: #999;
}
.clients__review {
  border: 1px solid $white;
  padding: 3rem 4rem 1rem;
  text-align: center;
  position: relative;
}
.tns-item {
  padding-top: 70px;
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
</style>
