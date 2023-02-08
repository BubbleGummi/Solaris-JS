const sunElems = document.querySelectorAll('.sun--secondary, .sun--first-layer');

function changeSunColor() {
sunElems.forEach((elem) => {
elem.style.backgroundColor = PLANET_BACKGROUND_COLOR;
});
}

export { changeSunColor };