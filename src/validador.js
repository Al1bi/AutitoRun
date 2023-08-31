module.exports = class Validador{

  esNumero(cadena){
    for(let i = 0; i < cadena.length; i++){
      if(!( cadena[i] >= '0' && cadena[i] <='9')) return false;
    }
    return true;
  }

  pos_inicial_valido(_comando){
    let coordenadaX = "";
    let coordenadaY = "";
    let orientacion = "";
  
    let aux = false;

    for(let i = 0 ; i < _comando.length; i++){
      if(_comando[i] == "," && !aux){
        aux = true;
        continue;
      }
      if(!aux) coordenadaX += _comando[i];
      else{
        if(i == _comando.length -1) orientacion = _comando[i];
        else coordenadaY += _comando[i]; 
      }
    }

    if(!aux) return false;
    if( !this.esNumero(coordenadaX) && !this.esNumero(coordenadaY) ) return false;

    coordenadaX = parseInt(coordenadaX);
    coordenadaY = parseInt(coordenadaY);
    
    if(coordenadaX < 0 || coordenadaY < 0) return false;
    if(orientacion != 'N' && orientacion != 'O' && orientacion != 'S' && orientacion != 'E') return false;

    return true;
  }


  comandoValido(comando){

    let dimension = "";
    let pos_ini = "";

    let i = 0;

    for(i; i < comando.lengthl; i++){
      if(comando[i] == '/') break;
      dimension+=comando[i];
    }
    i++;
    for(i; i < comando.length; i++){
      pos_ini+=comando[i];
    }

    return this.pos_inicial_valido(pos_ini);
  }

};