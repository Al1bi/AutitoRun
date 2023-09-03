import Autito from "./autito";

describe("Auto", () => {
  it("Sea la orientacion inicial \"N\", dada la instruccion \"II\", la orientacion resultante deberia ser \"S\"  ", () => {
    const auto1 = new Autito(0, 0,"N", "II");
    expect(auto1.actualOrientacion).toEqual("S");
  });

  it("Sea la orientacion inicial \"O\", dada la instruccion \"IIIII\", la orientacion resultante deberia ser \"N\"  ", () => {
    const auto1 = new Autito(0, 0,"O", "IIIII");
    expect(auto1.actualOrientacion).toEqual("N");
  });

  it("Sea la orientacion inicial \"S\", dada la instruccion \"DDDDDDD\", la orientacion resultante deberia ser \"O\"  ", () => {
    const auto1 = new Autito(0,0,"S", "DDDDDDD");
    expect(auto1.actualOrientacion).toEqual("O");
  });

  it("Sea la orientacion inicial \"E\", dada la instruccion \"DD\", la orientacion resultante deberia ser \"O\"  ", () => {
    const auto1 = new Autito(0,0,"E", "DD");
    expect(auto1.actualOrientacion).toEqual("O");
  });

  it("Sea la orientacion inicial \"O\", dada la instruccion \"IDDIID\", la orientacion resultante deberia ser \"O\"  ", () => {
    const auto1 = new Autito(0,0,"O", "IDDIID");
    expect(auto1.actualOrientacion).toEqual("O");
  });

  it("Sea la posicion inicial \"0,0N\", dada la instruccion \"ADAIA\",  la posicion final deberia ser \"1,2N\"  ", () => {
    const auto1 = new Autito(0, 0,"N", "ADAIA");
    expect(auto1.posicionFinal).toEqual("1,2N");
  });

  it("Sea la posicion inicial \"3,1N\", dada la instruccion \"AIAAIAAIAAA\",  la posicion final deberia ser \"4,0O\"  ", () => {
    const auto1 = new Autito(3, 1,"N", "AIAAIAAIAAA");
    expect(auto1.posicionFinal).toEqual("4,0O");
  });

});