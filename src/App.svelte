<script>
  import Window from "./components/Window.svelte";
  import Map from "./components/Map.svelte";

  // Handle responsive iframes for embeds
  import pym from "pym.js";

  new pym.Child({
    polling: 500,
  });

  function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  let includeCredit = getUrlParameter("credit") != "false";
</script>

<Window />
<!-- Outer div must have class 'chart-container' don't change -->
<div class="chart-container">
  <h1 class="headline">
    Extent of the Hatchie-Loosahatchie Mississippi River Ecosystem Restoration
    project
  </h1>
  <p class="dek hide-in-static">
    A proposed $63.7 million restoration project aims to reconnect floodplains,
    restore endangered species' habitats, and combat invasive carp along the
    Mississippi River near Memphis.
  </p>
  <p class="sr-only">
    A map showing the approximate area of the Hatchie-Loosahatchie Mississippi
    River Ecosystem Restoration project near Memphis, Tennessee, with major
    roads, water bodies, and an inset highlighting the project's location within
    the region.
  </p>

  <div id="g-viz">
    <Map />
  </div>

  {#if includeCredit}
    <div class="credit">
      Data: U.S. Army Corps of Engineers; Graphic by Jared Whalen /
      <a target="_blank" href="https://agwaterdesk.org/">Ag & Water Desk</a>
    </div>
  {/if}
</div>

<style lang="scss">
  .chart-container {
    max-width: 800px;
    width: 100%;
    padding: 0.5rem;

    #g-viz {
      width: 100%;
    }
  }
</style>
