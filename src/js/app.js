let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let contador2 = 0;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(() => {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + -width * contador + "px)";
  slider.style.transition = "transform 2s";
  contador++;
  if (contador == sliderIndividual.length) {
    setTimeout(() => {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 3500);
  }
}
