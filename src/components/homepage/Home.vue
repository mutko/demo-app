<template>
  <div class="home">
    <div class="wrapper">
      <PageHeader/>
      <Banner/>
    </div>
    <About/>
    <Features/>
    <Pricing/>
    <Screenshot/>
    <Clients/>
    <Contact/>
    <Map/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from "./Header";
import Banner from "./Banner";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Screenshot from "./Screenshot";
import Clients from "./Clients";
import Contact from "./Contact";
import Map from "./Map";
import PageFooter from "./Footer";

export default {
  name: "home",
  components: {
    PageHeader,
    Banner,
    About,
    Features,
    Pricing,
    Screenshot,
    Clients,
    Contact,
    Map,
    PageFooter
  }
};
</script>

<style lang="scss">
</style>
