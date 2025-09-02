const AnaliseDeDados = require("../src/analiseDeDados");

describe("AnaliseDeDados", () => {
  let dados;

  beforeEach(() => {
    dados = new AnaliseDeDados([1, 2, 3, 4, 5]);
  });

  test("adicionarDados deve adicionar corretamente", () => {
    dados.adicionarDados([6, 7]);
    expect(dados.dados).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("adicionarDados deve lançar erro se não for array", () => {
    expect(() => dados.adicionarDados(10)).toThrow("Os dados devem ser um array.");
  });

  test("limparDados deve resetar os dados", () => {
    dados.limparDados();
    expect(dados.dados).toEqual([]);
  });

  test("ordenarDados deve retornar em ordem crescente", () => {
    expect(dados.ordenarDados()).toEqual([1, 2, 3, 4, 5]);
  });

  test("calcularMedia deve retornar valor correto", () => {
    expect(dados.calcularMedia()).toBe(3);
  });

  test("calcularMedia deve retornar null para array vazio", () => {
    dados.limparDados();
    expect(dados.calcularMedia()).toBeNull();
  });

  test("calcularMediana com número ímpar de elementos", () => {
    expect(dados.calcularMediana()).toBe(3);
  });

  test("calcularMediana com número par de elementos", () => {
    dados = new AnaliseDeDados([1, 2, 3, 4]);
    expect(dados.calcularMediana()).toBe(2.5);
  });

  test("calcularMediana retorna null para vazio", () => {
    dados.limparDados();
    expect(dados.calcularMediana()).toBeNull();
  });

  test("calcularModa deve funcionar", () => {
    dados = new AnaliseDeDados([1, 2, 2, 3, 3]);
    expect(dados.calcularModa()).toEqual([2, 3]);
  });

  test("calcularModa deve retornar null para vazio", () => {
    dados = new AnaliseDeDados([]);
    expect(dados.calcularModa()).toBeNull();
  });

  test("calcularVariancia deve funcionar", () => {
    expect(dados.calcularVariancia()).toBe(2);
  });

  test("calcularVariancia deve retornar null se vazio", () => {
    dados = new AnaliseDeDados([]);
    expect(dados.calcularVariancia()).toBeNull();
  });

  test("calcularDesvioPadrao deve funcionar", () => {
    expect(dados.calcularDesvioPadrao()).toBe(Math.sqrt(2));
  });

  test("encontrarMinimo deve retornar valor mínimo", () => {
    expect(dados.encontrarMinimo()).toBe(1);
  });

  test("encontrarMinimo deve retornar null para vazio", () => {
    dados = new AnaliseDeDados([]);
    expect(dados.encontrarMinimo()).toBeNull();
  });

  test("encontrarMaximo deve retornar valor máximo", () => {
    expect(dados.encontrarMaximo()).toBe(5);
  });

  test("encontrarMaximo deve retornar null para vazio", () => {
    dados = new AnaliseDeDados([]);
    expect(dados.encontrarMaximo()).toBeNull();
  });

  test("normalizarDados deve normalizar valores", () => {
    expect(dados.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
  });

  test("normalizarDados deve lidar com valores iguais", () => {
    dados = new AnaliseDeDados([5, 5, 5]);
    expect(dados.normalizarDados()).toEqual([0, 0, 0]);
  });

  test("calcularPercentil deve funcionar", () => {
    expect(dados.calcularPercentil(50)).toBe(3);
  });

  test("calcularPercentil inválido deve retornar null", () => {
    expect(dados.calcularPercentil(200)).toBeNull();
  });

  test("calcularPercentil vazio deve retornar null", () => {
    dados = new AnaliseDeDados([]);
    expect(dados.calcularPercentil(50)).toBeNull();
  });

  test("calcularSoma deve somar todos valores", () => {
    expect(dados.calcularSoma()).toBe(15);
  });

  test("calcularProduto deve multiplicar todos valores", () => {
    expect(dados.calcularProduto()).toBe(120);
  });

  test("calcularAmplitude deve retornar diferença entre max e min", () => {
    expect(dados.calcularAmplitude()).toBe(4);
  });

  test("calcularCoeficienteVariacao deve funcionar", () => {
    expect(dados.calcularCoeficienteVariacao()).toBeCloseTo((Math.sqrt(2) / 3) * 100);
  });

  test("calcularCoeficienteVariacao deve retornar null se média = 0", () => {
    dados = new AnaliseDeDados([0, 0, 0]);
    expect(dados.calcularCoeficienteVariacao()).toBeNull();
  });

  test("removerOutliers deve remover valores extremos", () => {
    dados = new AnaliseDeDados([1, 2, 3, 100]);
    dados.removerOutliers();
    expect(dados.dados).toEqual([1, 2, 3]);
  });

  // test("calcularCorrelacao deve retornar correlação correta", () => {
  //   dados = new AnaliseDeDados([1, 2, 3]);
  //   expect(dados.calcularCorrelacao([2, 4, 6])).toBe(1);
  // });

  test("calcularCorrelacao deve retornar null se arrays diferentes", () => {
    expect(dados.calcularCorrelacao([1, 2])).toBeNull();
  });

  test("calcularCorrelacao deve retornar null se array inválido", () => {
    expect(dados.calcularCorrelacao("teste")).toBeNull();
  });

  test("calcularCorrelacao deve retornar null se denominador for 0", () => {
    dados = new AnaliseDeDados([1, 1, 1]);
    expect(dados.calcularCorrelacao([2, 2, 2])).toBeNull();
  });
});