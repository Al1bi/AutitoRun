import Autito from "./autito";

describe("Auto", () => {
  it("Sea la orientacion inicial \"N\", dada la instruccion \"II\", la orientacion resultante deberia ser \"S\"  ", () => {
    const auto1 = new Autito("N", "II");
    expect(auto1.actualOrientacion).toEqual("S");
  });

  it("Sea la orientacion inicial \"O\", dada la instruccion \"IIIII\", la orientacion resultante deberia ser \"N\"  ", () => {
    const auto1 = new Autito("O", "IIIII");
    expect(auto1.actualOrientacion).toEqual("N");
  });

  it("Sea la orientacion inicial \"S\", dada la instruccion \"DDDDDDD\", la orientacion resultante deberia ser \"O\"  ", () => {
    const auto1 = new Autito("S", "DDDDDDD");
    expect(auto1.actualOrientacion).toEqual("O");
  });

  it("Sea la orientacion inicial \"E\", dada la instruccion \"DD\", la orientacion resultante deberia ser \"O\"  ", () => {
    const auto1 = new Autito("E", "DD");
    expect(auto1.actualOrientacion).toEqual("O");
  });

  it("Sea la orientacion inicial \"O\", dada la instruccion \"IDDIID\", la orientacion resultante deberia ser \"O\"  ", () => {
    const auto1 = new Autito("O", "IDDIID");
    expect(auto1.actualOrientacion).toEqual("O");
  });

});