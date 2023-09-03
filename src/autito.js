module.exports = class Autito{

  constructor(posIniX, posIniY, orientacion, instrucciones){
    this.posActX = posIniX;
    this.posActY = posIniY;
    this.actualOrientacion = orientacion;
    this.posicionFinal = this.ejecutarInstrucciones(instrucciones);
  }

  ejecutarInstrucciones(instrucciones){
      
    let orientacion = ['S', 'E', 'N', 'O'];
    let dx =  [0, -1, 0, 1];
    let dy = [-1, 0, 1, 0];

    let indice = 0;

    for(let i = 0; i < 4; i++){
      if(this.actualOrientacion == orientacion[i]) indice = i;
    }

    for(let i = 0; i < instrucciones.length; i++){
      if( instrucciones[i] == 'I') indice--;
      if( instrucciones[i] == 'D') indice++;
      if( instrucciones[i] == 'A'){
        this.posActX+=dx[indice];
        this.posActY+=dy[indice];
      }
      indice = (indice +4)%4;
    }

    this.actualOrientacion = orientacion[indice] ;
    
    return String(this.posActX)+","+ String(this.posActY) + String(this.actualOrientacion);
  }

};