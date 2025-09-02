const Utilitarios = require('../src/utilitarios');


describe("Classe Utilitarios", () => {
  let util;

  beforeEach(() => {
    util = new Utilitarios();
  });

  test("inverterString", () => {
    expect(util.inverterString("abc")).toBe("cba");
  });

  test("contarCaracteres", () => {
    expect(util.contarCaracteres("abc")).toBe(3);
  });

    test("paraMaiusculas", () => {
    expect(util.paraMaiusculas("abc")).toBe("ABC");
  });

  test("paraMinusculas", () => {
    expect(util.paraMinusculas("ABC")).toBe("abc");
  });

  test("primeiraLetraMaiuscula", () => {
    expect(util.primeiraLetraMaiuscula("teste")).toBe("Teste");
  });

  test("somar", () => {
    expect(util.somar(2, 3)).toBe(5);
  });

  test("subtrair", () => {
    expect(util.subtrair(5, 3)).toBe(2);
  });

    test("multiplicar", () => {
    expect(util.multiplicar(2, 3)).toBe(6);
  });

  test("dividir com sucesso", () => {
    expect(util.dividir(6, 3)).toBe(2);
  });

  test("dividir por zero lança erro", () => {
    expect(() => util.dividir(6, 0)).toThrow("Divisão por zero");
  });

  test("ehPar", () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

  test("primeiroElemento", () => {
    expect(util.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test("ultimoElemento", () => {
    expect(util.ultimoElemento([1, 2, 3])).toBe(3);
  });

    test("tamanhoArray", () => {
    expect(util.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test("ordenarArray", () => {
    expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("inverterArray", () => {
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("gerarNumeroAleatorio", () => {
    const num = util.gerarNumeroAleatorio(10);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(10);
  });

  test("ehNumero", () => {
    expect(util.ehNumero(123)).toBe(true);
    expect(util.ehNumero("abc")).toBe(false);
    expect(util.ehNumero(NaN)).toBe(false);
  });

  test("removerEspacos", () => {
    expect(util.removerEspacos("  teste  ")).toBe("teste");
  });

  test("repetirTexto", () => {
    expect(util.repetirTexto("a", 3)).toBe("aaa");
  });

  test("juntarArray", () => {
    expect(util.juntarArray([1, 2, 3], "-")).toBe("1-2-3");
  });

  test("contarPalavras", () => {
    expect(util.contarPalavras("um  dois   tres")).toBe(3);
  });

  test("mediaArray", () => {
    expect(util.mediaArray([2, 4, 6])).toBe(4);
    expect(util.mediaArray([])).toBe(0);
  });

  test("removerDuplicados", () => {
    expect(util.removerDuplicados([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
  });

    test('deve gerar número entre 0 e 99 quando não passar parâmetro', () => {
    for (let i = 0; i < 50; i++) { // roda várias vezes para garantir
      const num = util.gerarNumeroAleatorio();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThan(100);
    }
  });

});