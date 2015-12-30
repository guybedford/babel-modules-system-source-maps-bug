var babel = require('babel-core');

var output = babel.transform('export var p = 5', {
  sourceMaps: true
});

console.log(output.map);
