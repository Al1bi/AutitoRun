import Validador from "./validador";

describe("Validadorr", () => {
  it("La coordenada \"0,0N\" es valida ", () => {
    const vl = new Validador();
    expect(vl.pos_inicial_valido("0,0N")).toEqual(true);
  });

  it("La coordenada \"-1,0N\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.pos_inicial_valido("-1,0N")).toEqual(false);
  });

  it("La coordenada \"UUU\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.pos_inicial_valido("UUU")).toEqual(false);
  });

  it("La coordenada \"15,9Z\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.pos_inicial_valido("15,9Z")).toEqual(false);
  });

  it("La coordenada \"BB,AAZ\" es invalida ", () => {
    const vl = new Validador();
    expect(vl.pos_inicial_valido("BB,AAZ")).toEqual(false);
  });

});