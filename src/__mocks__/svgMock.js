const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = function() {return "${path.basename(
      filename
    )}";};`;
  }
};
