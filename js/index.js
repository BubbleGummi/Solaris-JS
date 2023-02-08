// Här hämtas alla funktioner och körs ut i programmet.. top level await. 
import { getPlanets } from './modules/httpRequests.js';
import { clickPlanet, goBack } from './modules/clickPlanets.js';

const ALL_PLANETS_DATA = await getPlanets(); 

function main() {
  clickPlanet();
  goBack();
}

main();

export { ALL_PLANETS_DATA };
 