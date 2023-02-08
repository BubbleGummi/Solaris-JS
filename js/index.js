import { getPlanets } from './modules/httpRequests.js';
import { clickPlanet, goBack } from './modules/clickPlanets.js';

const ALL_PLANETS_DATA = await getPlanets(); // top level await

function main() {
  clickPlanet();
  goBack();
}

main();

export { ALL_PLANETS_DATA };
 