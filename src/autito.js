module.exports = class Autito{

  constructor( orientacion, instrucciones){
    this.actualOrientacion = orientacion;
    this.ejecutarInstrucciones(instrucciones);
  }

  ejecutarInstrucciones(instrucciones){
      
    let orientacion = ['S', 'E', 'N', 'O'];
    
    let indice = 0;

    for(let i = 0; i < 4; i++){
      if(this.actualOrientacion == orientacion[i]) indice = i;
    }

    for(let i = 0; i < instrucciones.length; i++){
      if( instrucciones[i] == 'I') indice--;
      indice = (indice +4)%4;
    }

    return this.actualOrientacion = orientacion[indice] ;
  }

};