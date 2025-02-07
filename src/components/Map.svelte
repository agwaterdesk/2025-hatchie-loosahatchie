<script>
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

  // Main map dimensions
  const width = 800;
  const height = 1000;

  // Inset map dimensions - now as percentages of main map
  const insetWidthPercent = 25; // 25% of main map width
  const insetWidth = 200;
  const insetHeight = 200;

  // Main map bbox
  const mainBbox = "-90.229525,35.063049,-89.851870,35.691208";

  // Inset map bbox
  const insetBbox = "-93.136082,33.082409,-86.873875,38.410626";

  // Rectangle color
  const highlightColor = "548687";

  // Generate the main map URL
  const mainMapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[${mainBbox}]/${width}x${height}?access_token=${MAPBOX_TOKEN}`;

  // Generate the inset map URL with the main area highlighted
  const insetMapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/geojson(%7B%22type%22%3A%22Feature%22%2C%22properties%22%3A%7B%22stroke%22%3A%22%23${highlightColor}%22%2C%22stroke-width%22%3A2%2C%22fill%22%3A%22%23${highlightColor}%22%2C%22fill-opacity%22%3A0.2%7D%2C%22geometry%22%3A%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B-90.398254%2C35.094069%5D%2C%5B-89.673157%2C35.094069%5D%2C%5B-89.673157%2C35.728677%5D%2C%5B-90.398254%2C35.728677%5D%2C%5B-90.398254%2C35.094069%5D%5D%5D%7D%7D)/[${insetBbox}]/${insetWidth}x${insetHeight}?attribution=false&access_token=${MAPBOX_TOKEN}`;
</script>

<div class="map-container">
  <img
    src={mainMapUrl}
    alt="Main map showing the Hatchie-Loosahatchie region"
    class="main-map"
  />
  <div class="inset-map">
    <img
      src={insetMapUrl}
      alt="Inset map showing the broader regional context"
    />
    <div class="inset-label">Project area</div>
  </div>
</div>

<style lang="scss">
  @use "../scss/abstracts" as *;

  .map-container {
    position: relative;
    width: 100%;
    max-width: 800px;

    .main-map {
      width: 100%;
      height: auto;
    }

    .inset-map {
      position: absolute;
      bottom: 5%;
      right: 5%;
      width: 30%;
      height: 25%;
      aspect-ratio: 1;
      border: 2px solid #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      background: white;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .inset-label {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2px 8px;
        font-weight: 900;
        white-space: nowrap;
        font-size: 14px;

        @include mq($break: "medium", $dir: "max-width") {
          font-size: 0.6em;
        }
      }
    }
  }
</style>
