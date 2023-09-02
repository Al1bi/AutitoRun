import Interpretador from "./interpretador";

describe("Validadorr", () => {
  it("La coordenada \"0,0N\" es valida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("0,0N")).toEqual(true);
  });

  it("La coordenada \"-1,0N\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("-1,0N")).toEqual(false);
  });

  it("La coordenada \"UUU\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("UUU")).toEqual(false);
  });

  it("La coordenada \"15,9Z\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("15,9Z")).toEqual(false);
  });

  it("La coordenada \"BB,AAZ\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("BB,AAZ")).toEqual(false);
  });

  it("La dimension \"3,3\" es valida ", () => {
    const vl = new Interpretador();
    expect(vl.dimensionValido("3,3")).toEqual(true);
  });

  it("La dimension \"3,A\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.dimensionValido("3,A")).toEqual(false);
  });


});