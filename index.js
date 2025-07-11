import { queryDemographicData } from "@esri/arcgis-rest-demographics";
import { ApiKeyManager } from "@esri/arcgis-rest-request";
import "dotenv/config";

const authentication = ApiKeyManager.fromKey(process.env.ARCGIS_API_KEY);

const studyAreas = [
  { geometry: { x: -77.037, y: 38.907, spatialReference: { wkid: 4326 } } },
];

async function run() {
  const res = await queryDemographicData({ studyAreas, authentication });
  const attrs = res.results[0].value.FeatureSet[0].features[0].attributes;
  console.log("Population:", attrs.TOTPOP);
  console.log("Households:", attrs.TOTHH);
  console.log("Avg household size:", attrs.AVGHHSZ);
}

run()


