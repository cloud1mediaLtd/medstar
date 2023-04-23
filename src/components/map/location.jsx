import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Location = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW5hc21haG11ZCIsImEiOiJjbGY1NHh6Y3kwaTJqNDByMHl3amxuamF1In0.ETEqb0nPmL-cqwfMkXP2cg";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/anasmahmud/clf547s78009m01mlx4ws1cxh",
      center: [-2.2234355305687528, 53.45299403486571],
      zoom: 16.9,
      pitch: 35,
      bearing: -35,
      antialias: true,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Create a new marker.
    new mapboxgl.Marker()
      .setLngLat([-2.2234355305687528, 53.45299403486571])
      .addTo(map);

    map.on("load", () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayer = layers.find(
        (layer) => layer.type === "symbol" && layer.layout["text-field"]
      );

      if (!labelLayer) {
        return;
      }

      const labelLayerId = labelLayer.id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          id: "add-3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
    });

    return () => map.remove();
  }, []);

  return (
    <div className="p-4 rounded">
      <div
        id="map"
        className="w-full max-w-screen-xl mx-auto rounded p-4 md:py-8 h-72 md:h-96 "
      />
    </div>
  );
};

export default Location;
