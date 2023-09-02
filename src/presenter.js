import Interpretador from "./interpretador";

const comando = document.querySelector("#comando-text");
const div = document.querySelector("#resultado-div");
const form = document.querySelector("#comandos-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const vl = new Interpretador(comando.value);

  if(!vl.esComandoValido()){
    alert("El comando ingresado es invalido, por favor vuelva a ingresar otro.");
    return;
  }


  div.innerHTML = "<p> Poscion inicial: " + vl.pos_ini + "</p>";

  div.innerHTML += " Comandos: <p>" + comando.value + "</p>";

});
