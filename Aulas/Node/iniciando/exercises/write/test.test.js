const { expect } = require("chai");
const fs = require('fs');
const sinon = require('sinon');
const write = require('./index');
const conteudo = 'escrevendo no arquivo';

describe('testando escrita em arquivos', function() {
  describe('arquivo exitente', function(){
    before(() => {
      sinon.stub(fs, 'writeFile').returns('ok');
    });

    after(() => {
      fs.writeFile.restore();
    });

    describe('conseguimos', function(){
      it('escrever no arquivo', function(){
        const result = write('./arquive.txt', conteudo);

        expect(result).to.be.equal('ok');
      });
    });
  });
})