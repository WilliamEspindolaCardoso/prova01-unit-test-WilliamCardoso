const AnaliseDeDados = require("../src/analiseDeDados");

describe('AnaliseDeDados', () => {
    let analise;
  
    beforeEach(() => {
      analise = new AnaliseDeDados([10, 20, 30, 40, 50]);
    });
  
    test('Deve calcular a média corretamente', () => {
      expect(analise.calcularMedia()).toBe(30);
    });
  
    test('Deve calcular a mediana corretamente', () => {
      expect(analise.calcularMediana()).toBe(30);
    });
  
    test('Deve calcular a moda corretamente', () => {
      analise.adicionarDados([20, 20, 40, 40]);
      expect(analise.calcularModa()).toEqual([20, 40]);
    });
  
    test('Deve calcular a variância corretamente', () => {
      expect(analise.calcularVariancia()).toBe(200);
    });
  
    test('Deve calcular o desvio padrão corretamente', () => {
      expect(analise.calcularDesvioPadrao()).toBeCloseTo(14.14, 2);
    });
    

    // meus testes
    test("adicionarDados deve adicionar elementos ao array", () => {
      analise.adicionarDados([60, 70]);
      expect(analise.dados).toEqual([10, 20, 30, 40, 50, 60, 70]);
    });

    test("calcularMedia deve retornar a média dos números", () => {
      expect(analise.calcularMedia()).toBe(30);
    });

    test("calcularMediana deve funcionar para listas pares e ímpares", () => {
      const analiseImpar = new AnaliseDeDados([1, 3, 2]);
      expect(analiseImpar.calcularMediana()).toBe(2);

      const analisePar = new AnaliseDeDados([1, 2, 3, 4]);
      expect(analisePar.calcularMediana()).toBe(2.5);
    });

    test("normalizarDados deve normalizar para intervalo 0 a 1", () => {
      expect(analise.normalizarDados()).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });

    test("calcularCorrelacao deve retornar 1 para listas idênticas", () => {
      expect(analise.calcularCorrelacao([10, 20, 30, 40, 50])).toBe(1);
    });


  });
  