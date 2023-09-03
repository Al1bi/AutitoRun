import Interpretador from "./interpretador";

describe("Interpretador", () => {
  it("El formato de la coordenada \"0,0N\" es valida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("0,0N")).toEqual(true);
  });

  it("El formato de la coordenada \"-1,0N\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("-1,0N")).toEqual(false);
  });

  it("El formato de la coordenada \"UUU\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("UUU")).toEqual(false);
  });

  it("El formato de la coordenada \"15,9Z\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("15,9Z")).toEqual(false);
  });

  it("El formato de la coordenada \"BB,AAZ\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.posInicialValido("BB,AAZ")).toEqual(false);
  });

  it("El formato de la dimension \"3,3\" es valida ", () => {
    const vl = new Interpretador();
    expect(vl.dimensionValido("3,3")).toEqual(true);
  });

  it("El formato de la dimension \"3,A\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.dimensionValido("3,A")).toEqual(false);
  });

  it("El formato de la instruccion \"DDII\" es valida ", () => {
    const vl = new Interpretador();
    expect(vl.instruccionesValido("DDII")).toEqual(true);
  });

  it("El formato de la instruccion \"HOLA\" es invalida ", () => {
    const vl = new Interpretador();
    expect(vl.instruccionesValido("HOLA")).toEqual(false);
  });

  it("El formato de la instruccion \"DADAIIAIIDD\" es valida ", () => {
    const vl = new Interpretador();
    expect(vl.instruccionesValido("DADAIIAIIDD")).toEqual(true);
  });

  it("El formato del comando  \"1,1/3,3N/AADDIAAA\" es valido ", () => {
    const vl = new Interpretador("1,1/3,3N/AADDIAAA");
    expect(vl.esComandoValido()).toEqual(true);
  });

  it("El formato del comando  \"1,1/3,3A/AADDIAAA\" es invalido ", () => {
    const vl = new Interpretador("1,1/3,3A/AADDIAAA");
    expect(vl.esComandoValido()).toEqual(false);
  });

  it("El formato del comando  \"AAAAAAAAAAAAAA\" es invalido ", () => {
    const vl = new Interpretador("AAAAAAAAAAAAAA");
    expect(vl.esComandoValido()).toEqual(false);
  });

  it("El comando \"1,1/3,3A/AADDIAAA\" es incoherente ", () => {
    const vl = new Interpretador("1,1/3,3A/AADDIAAA");
    expect(vl.esCoherente()).toEqual(false);
  });

  it("El comando \"9,9/3,3A/AADDIAAA\" es coherente ", () => {
    const vl = new Interpretador("1,1/3,3A/AADDIAAA");
    expect(vl.esCoherente()).toEqual(false);
  });

});