// Genera public/geo/region.json: Argentina (con Malvinas) en alta resolución
// y países vecinos en resolución media, a partir de Natural Earth (world-atlas).
// Uso: node scripts/build-geo.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { feature } from "topojson-client";
import { presimplify, simplify, quantile } from "topojson-simplify";

const load = (f) => JSON.parse(readFileSync(new URL(`../node_modules/world-atlas/${f}`, import.meta.url)));
const round = (geom) => JSON.parse(JSON.stringify(geom, (k, v) => (typeof v === "number" ? Math.round(v * 1000) / 1000 : v)));

function pick(file, names, keep) {
  let topo = load(file);
  topo = presimplify(topo);
  topo = simplify(topo, quantile(topo, keep));
  return feature(topo, topo.objects.countries).features.filter((f) => names.includes(f.properties.name));
}

const argentina = pick("countries-10m.json", ["Argentina", "Falkland Is."], 0.5).map((f) => ({
  type: "Feature",
  properties: { name: "Argentina" },
  geometry: round(f.geometry),
}));
const neighbors = pick("countries-50m.json", ["Chile", "Uruguay", "Paraguay", "Bolivia", "Brazil", "Peru"], 0.3).map((f) => ({
  type: "Feature",
  properties: { name: f.properties.name },
  geometry: round(f.geometry),
}));

const out = { argentina: { type: "FeatureCollection", features: argentina }, neighbors: { type: "FeatureCollection", features: neighbors } };
writeFileSync(new URL("../public/geo/region.json", import.meta.url), JSON.stringify(out));
console.log("ok", argentina.length, neighbors.length);
