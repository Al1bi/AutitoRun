import Interpretador from "./interpretador";
import Autito from "./autito";

const comando = document.querySelector("#comando-text");
const div = document.querySelector("#resultado-div");
const form = document.querySelector("#comandos-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const vl = new Interpretador(comando.value);

  if(!vl.esComandoValido()){
    alert("El comando ingresado es invalido, por favor vuelva a ingresar otro comando.");
    return;
  }

  if(!vl.esCoherente()){
    alert("La posicion inicial ingresada debe encontrarse dentro de los limites de la grilla, por favor vuelva a ingresar otro comando");
    return;
  }

  const auto = new Autito(vl.ancho, vl.alto, vl.coordenadaX, vl.coordenadaY,vl.orientacion, vl.instrucciones);

  div.innerHTML = "<p> Posicion inicial: " + vl.pos_ini + "</p>";

  div.innerHTML += " Comandos: <p>" + vl.instrucciones + "</p>";

  div.innerHTML += "<p> Posicion Final: " +  auto.posicionFinal + "</p>";

});
