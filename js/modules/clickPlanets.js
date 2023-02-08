// Denna modul gör planeterna klickbara och displayar page two. Denna modul är ansvarig för alla onClick events.

import { ALL_PLANETS_DATA } from '../index.js';
import { changeInfo } from './information.js';
import { changeSunColor } from "./changeSun.js";

function clickPlanet() {
  const PLANETS_ELEM = document.querySelectorAll('.planets__planet');

  PLANETS_ELEM.forEach((planet, index) => {
    planet.addEventListener('click', (e) => planetOnClick(ALL_PLANETS_DATA[index], e));
  });
}

function planetOnClick(planetData, e) {
  toggleDisplayPages();
  changeInfo(planetData);
  changeSunColor(e);
}

function toggleDisplayPages() {
  const PAGE_ONE = document.querySelector('#pageOne');
  const PAGE_TWO = document.querySelector('#pageTwo');
  PAGE_ONE.classList.toggle('hide');
  PAGE_TWO.classList.toggle('hide');
}

function goBack() {
  const SUN_SECONDARY = document.querySelector('.sun--second-layer');
  SUN_SECONDARY.addEventListener('click', toggleDisplayPages);
}


export { clickPlanet, goBack};
