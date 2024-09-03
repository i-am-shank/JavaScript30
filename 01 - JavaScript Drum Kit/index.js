// Click-events addition
// ==============================

const clap = document.querySelectorAll('[data-key="65"]');
const hihat = document.querySelectorAll('[data-key="83"]');
const kick = document.querySelectorAll('[data-key="68"]');
const openhat = document.querySelectorAll('[data-key="70"]');
const boom = document.querySelectorAll('[data-key="71"]');
const ride = document.querySelectorAll('[data-key="72"]');
const snare = document.querySelectorAll('[data-key="74"]');
const tom = document.querySelectorAll('[data-key="75"]');
const tink = document.querySelectorAll('[data-key="76"]');

clap[0].addEventListener("click", () => {
    clap[1].play();
});
hihat[0].addEventListener("click", () => {
    hihat[1].play();
});
kick[0].addEventListener("click", () => {
    kick[1].play();
});
openhat[0].addEventListener("click", () => {
    openhat[1].play();
});
boom[0].addEventListener("click", () => {
    boom[1].play();
});
ride[0].addEventListener("click", () => {
    ride[1].play();
});
snare[0].addEventListener("click", () => {
    snare[1].play();
});
tom[0].addEventListener("click", () => {
    tom[1].play();
});
tink[0].addEventListener("click", () => {
    tink[1].play();
});

// Keyboard-key-events addition
// ===============================

document.addEventListener("keydown", (event) => {
    // fetch keyCode --> gives ASCII value of uppercase alphabet
    const keyCode = event.keyCode;
    const sound = document.querySelectorAll(`[data-key="${keyCode}"]`);
    if (sound) {
        // if there's a sound linked to this letter-key, play it
        sound[1].play();
    }
});
