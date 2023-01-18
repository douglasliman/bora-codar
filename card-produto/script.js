const view3d = document.querySelector(" .view-3d");
const close3d = document.querySelector(".close3d");
const sofa = document.querySelector(".sofa");
const sofa3d = document.querySelector("..sofa-animado");
function removeClasses() {
  close3d.classList.remove("hidden");
  view3d.classList.add("hidden");
  sofa.classList.remove("sofa");
  sofa.classList.add("sofa-animado");
}
function addClasses() {
  view3d.classList.remove("hidden");
  close3d.classList.add("hidden");
  sofa.classList.remove("sofa-animado");
  sofa.classList.add("sofa");
}