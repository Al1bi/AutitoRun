module.exports = class Interpretador{

  constructor(comando){
    if(comando == undefined) return;

    let dimension = "";
    let pos_ini = "";
    let instrucciones = "";
    
    const partes = comando.split('/');

    if(partes.length >= 3){
      dimension = partes[0];
      pos_ini = partes[1];
      instrucciones = partes[2]
    }

    this.comando = comando;
    this.pos_ini =  pos_ini;
    this.dimension = dimension;
    this.instrucciones = instrucciones;

    this.posInicialValido(pos_ini);    
    this.dimensionValido(dimension);
    this.instruccionesValido(instrucciones);
  }

  posInicialValido(_comando){

    let valido = true;
    let coordenadaX = "";
    let coordenadaY = "";
    let orientacion = "";
    
    const partes = _comando.split(',');
    
    if(partes.length !== 2) valido = false;

    if(partes.length >= 2){
      coordenadaX = partes[0];
      coordenadaY = partes[1].substring(0,partes[1].length -1);
      orientacion = partes[1][partes[1].length -1];
    }

    if( isNaN(coordenadaX) || isNaN(coordenadaY) ) valido = false;

    coordenadaX = parseInt(coordenadaX);
    coordenadaY = parseInt(coordenadaY);
    
    if(coordenadaX < 0 || coordenadaY < 0) valido = false;
    if(orientacion != 'N' && orientacion != 'O' && orientacion != 'S' && orientacion != 'E') valido = false;

    this.coordenadaX = coordenadaX;
    this.coordenadaY = coordenadaY;
    this.orientacion = orientacion;

    return this.pos_ini_valido = valido;
  }

  dimensionValido(_comando){
    
    let valido = true;    
    let ancho = "";
    let alto  = "";

    const partes = _comando.split(',');
    
    if(partes.length !== 2) valido = false;

    if(partes.length >= 2){
      ancho = partes[0];
      alto = partes[1];
    }

    if( isNaN(ancho) || isNaN(alto) ) valido = false;

    ancho = parseInt(ancho);
    alto = parseInt(alto);
    
    if(ancho <= 0 || alto <= 0) valido = false;
    
    this.ancho = ancho;
    this.alto = alto;

    return this.dimension_valido = valido;
  }

  instruccionesValido(_comando){
    let valido  = true;
      
    for(let i = 0; i < _comando.length; i++){
      if(_comando[i] != 'A' && _comando[i] != 'D' && _comando[i] != 'I' ){
        valido = false;
        break;
      }
    }

    return this.instrucciones_valido = valido;
  }

  esComandoValido(){
    return (this.dimension_valido && this.pos_ini_valido && this.instrucciones_valido);
  }

  esCoherente(){
    return this.coordenadaX <= this.ancho && this.coordenadaY <= this.alto;
  }


};