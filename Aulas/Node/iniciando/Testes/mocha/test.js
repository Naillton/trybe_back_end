const { expect } = require("chai");
const {calculateAVG, soma, sub, mult} = require("./index");

describe('Quando a média for menor que 7', () => {
  it('retornar "reprovado', () => {
    const result = calculateAVG(4);

    expect(result).equals('Reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
    it('retornar "aprovado', () => {
      const result = calculateAVG(8);
  
      expect(result).equals('Aprovado');
    });
});

describe('Quando a média for igual que 7', () => {
  it('retornar "aprovado', () => {
    const result = calculateAVG(7);

    expect(result).equals('Aprovado');
  });
});

describe('testaando se 1 + 1 é 2', () => {
  it('retorna 2', () => {
    const result = soma(1, 1);

    expect(result).to.be.equals(2);
  });
});

describe('testaando se 10 - 5 é 5', () => {
  it('retorna 5', () => {
    const result = sub(10, 5);

    expect(result).to.be.equals(5);
  });
});

describe('testando se é um número', () => {
  it('retorna number', () => {
    const result = sub(10, 5);

    expect(result).to.be.a('number');
  });
});

describe('testaando se 10 * 10 é 100', () => {
  it('retorna 100', () => {
    const result = mult(10, 10);

    expect(result).to.be.equals(100);
  });
});