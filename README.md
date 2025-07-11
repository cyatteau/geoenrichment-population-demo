# GeoEnrichment Population Demo

Fetch current demographic estimates (population, households, average household size, and more) for any location covered by ArcGIS GeoEnrichment for 170 countries and regions in under 20 lines of JavaScript.

This repo supports my World Population Day post.

## What it does
* Sends one request to the **ArcGIS GeoEnrichment** service  
* Prints key attributes for a study area you supply  
* Runs entirely in Node (no front-end required)

## Prerequisites
* Node 18 or newer  
* An ArcGIS API key with GeoEnrichment access

## Quick start

```bash
# clone the repo
git clone https://github.com/your-user/geoenrichment-population-demo.git
cd geoenrichment-population-demo

# install dependencies
npm install

# add your key
echo ARCGIS_API_KEY=YOUR_API_KEY_HERE > .env

# run the script
npm start
```

Example output:
\`\`\`
Population: 706457
Households: 287122
Avg household size: 2.36
\`\`\`

## How to change the location
Edit the \`studyAreas\` array in **index.mjs** (or **index.js**) to any longitude/latitude pair:

```js
const studyAreas = [
  { geometry: { x: -0.1276, y: 51.5072, spatialReference: { wkid: 4326 } } } // London
];
```

## Key files
| File | Purpose |
|------|---------|
| \`index.mjs\` | Main script that calls GeoEnrichment |
| \`.env\` | Stores your API key (excluded from Git) |
| \`package.json\` | Dependencies and run script |
| \`.gitignore\` | Prevents \`node_modules\` and \`.env\` from being committed |

## Resources
* [GeoEnrichment service docs](https://developers.arcgis.com/documentation/mapping-and-location-services/data-enrichment/)  
* [ArcGIS API keys](https://developers.arcgis.com/documentation/security-and-authentication/api-key-authentication/)