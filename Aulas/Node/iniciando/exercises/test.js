const{ expect } = require("chai");
const number = require('./index');

describe('testando um numero se e', function(){
  describe('se e', function(){
    it('positivo', function(){
      const result = number(5);
    
      expect(result).to.be.equal('positivo');
    });    
  });

  describe('se e', function(){
    it('se e negativo', function(){
      const result = number(-2);
    
      expect(result).to.be.equal('negativo');
    });
  });

  describe('se e', function(){
    it('neutro', function(){
        const result = number(0);
    
        expect(result).to.be.equal('neutro');
    });
  });

  describe('se nao e', function(){
    it('numero', function(){
        const result = number('s');
    
        expect(result).to.be.equal('o valor deve ser um número');
    });
  });
});