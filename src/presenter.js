import Validador from "./validador";

const comando = document.querySelector("#comando-text");
const div = document.querySelector("#resultado-div");
const form = document.querySelector("#comandos-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const vl = new Validador();

  const com = comando.value;

  if(!vl.comandoValido(com)){
    alert("El comando ingresado es invalido, por favor vuelva a ingresar otro.");
    return;
  }

  div.innerHTML = " Comandos: <p>" + comando.value + "</p>";

});
