var babel = require('babel-core');
var systemModules = require('babel-plugin-transform-es2015-modules-systemjs');

var output = babel.transform('export var p = 5', {
  plugins: [systemModules],
  sourceMaps: true
});

console.log(output.map);
