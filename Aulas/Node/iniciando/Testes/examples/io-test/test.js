const { expect } = require("chai");
const fs = require('fs');
const sinon = require('sinon');
const main = require('../index');
const conteudo = 'esse é meu arquivo';

describe('lendo arquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFile').returns(conteudo);
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('a resposta', () => {
      it('é uma string', () => {
        const result = main('meu-arquivo.txt');

        expect(result).to.be.a('string');
      });

      it('é igual ao conteudo do arquivo', () => {
        const result = main('meu-arquivo.txt');

        expect(result).to.be.equals(conteudo);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon.stub(fs, 'readFile').throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFile.restore();
    })
    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resp = main('arquivo.txt');
        
        expect(resp).to.be.equal(null);
      });
    });
  });
});