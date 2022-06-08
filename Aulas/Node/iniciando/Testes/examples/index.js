const fs = require('fs');

const main = (arquivo) => {
  try {
    const read =  fs.readFile(arquivo, 'utf8');

    return read;
  } catch (err) {
    return null;
  }
}

module.exports = main;