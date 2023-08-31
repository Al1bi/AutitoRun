import sumar from "./sumador";
const comando = document.querySelector("#comando-text");
const div = document.querySelector("#resultado-div");
const form = document.querySelector("#comandos-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  div.innerHTML = " Comandos: <p>" + comando.value + "</p>";

});
