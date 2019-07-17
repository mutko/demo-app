<template>
  <section id="map" class="map">
    <h2>Map</h2>
  </section>
</template>

<script>
export default {
  methods: {
    renderMap() {
      L.mapquest.key = "l26kacdUcAitMfeOUAnveXYhv1dFlUGp";
      var baseLayer = L.mapquest.tileLayer("light");

      L.mapquest.geocoding().geocode(["Belgrade, BG"], showMap);

      function showMap(err, data) {
        let map = createMap();
        map.addControl(L.mapquest.control());
        addLayerControl(map);
      }

      function createMap() {
        let map = L.mapquest.map("map", {
          center: [44.787197, 20.457273],
          zoom: 14,
          layers: baseLayer
        });
        return map;
      }

      function addLayerControl(map) {
        L.control
          .layers(
            {
              Map: L.mapquest.tileLayer("map"),
              Satellite: L.mapquest.tileLayer("satellite"),
              Hybrid: L.mapquest.tileLayer("hybrid"),
              Light: L.mapquest.tileLayer("light"),
              Dark: baseLayer
            },
            {},
            { position: "topleft" }
          )
          .addTo(map);
      }
    }
  },
  created() {
    this.renderMap();
  }
};
</script>

<style>
</style>
