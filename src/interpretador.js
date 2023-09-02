module.exports = class Interpretador{

  constructor(comando){
    if(comando == undefined) return;

    let dimension = "";
    let pos_ini = "";
    let instrucciones = "";
    
    const partes = comando.split('/');

    if(partes.length >= 2){
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
  }

  posInicialValido(_comando){

    if(_comando == undefined) _comando = this.comando;

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

    console.log(coordenadaX, coordenadaY);

    if( isNaN(coordenadaX) || isNaN(coordenadaY) ) valido = false;

    coordenadaX = parseInt(coordenadaX);
    coordenadaY = parseInt(coordenadaY);
    
    if(coordenadaX < 0 || coordenadaY < 0) valido = false;
    if(orientacion != 'N' && orientacion != 'O' && orientacion != 'S' && orientacion != 'E') valido = false;

    this.pos_ini_valido = valido;
    this.coordenadaX = coordenadaX;
    this.coordenadaY = coordenadaY;

    return valido;
  }

  dimensionValido(_comando){
    
    if(_comando == undefined) _comando = this.comando;

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
    
    this.dimension_valido = valido;
    this.ancho = ancho;
    this.alto = alto;

    return valido;
  }

  esComandoValido(){
    return (this.dimension_valido && this.pos_ini_valido);
  }


};