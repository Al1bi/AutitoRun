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

});