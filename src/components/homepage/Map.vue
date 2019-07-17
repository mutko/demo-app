<template>
  <section id="map" class="map">
    <h2>Map</h2>
  </section>
</template>

<script>
(function renderMap() {
  if (typeof L !== "undefined") {
    L.mapquest.key = "wRqiliOj84blrkNdpJ7Yqpos6RHIOYFS";

    var baseLayer = L.mapquest.tileLayer("light");

    L.mapquest.geocoding().geocode(["Belgrade, BG"], showMap);

    function showMap(err, data) {
      var map = createMap();
      map.addControl(L.mapquest.control());
      addLayerControl(map);
    }

    function createMap() {
      var map = L.mapquest.map("map", {
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
  } else {
    console.log("MapQuest CDN not online!");
  }
})();
</script>

<style>
</style>
