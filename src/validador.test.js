import Validador from "./validador";

describe("Validadorr", () => {
  it("La coordenada \"0,0N\" es valida ", () => {
    const vl = new Validador();
    expect(vl.comandoValido("0,0N")).toEqual(true);
  });

  it("La coordenada \"-1,0N\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.comandoValido("-1,0N")).toEqual(false);
  });

  it("La coordenada \"UUU\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.comandoValido("UUU")).toEqual(false);
  });

  it("La coordenada \"15,9Z\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.comandoValido("15,9Z")).toEqual(false);
  });

  it("La coordenada \"BB,AAZ\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.comandoValido("BB,AAZ")).toEqual(false);
  });

});