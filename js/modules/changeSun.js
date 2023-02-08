//Ändrar färg på planeten när man tryckt på att få läsa informationen. Står fr sig själv därför att de olika planeterna har olika färger.
const sunElems = document.querySelectorAll('.sun--secondary, .sun--first-layer');

function changeSunColor() {
sunElems.forEach((elem) => {
elem.style.backgroundColor = PLANET_BACKGROUND_COLOR;
});
}

export { changeSunColor };