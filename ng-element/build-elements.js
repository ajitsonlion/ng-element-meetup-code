const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const es2015Files = [
    './dist/ng-element/runtime-es2015.js',
    './dist/ng-element/polyfills-es2015.js',
    './dist/ng-element/main-es2015.js'
  ];
  const es5Files = [
    './dist/ng-element/runtime-es5.js',
    './dist/ng-element/polyfills-es5.js',
    './dist/ng-element/main-es5.js'
  ];
  await fs.ensureDir('lib');
  await concat(es2015Files, './lib/ng-element-es2015.js');
  await concat(es5Files, './lib/ng-element-es5.js');

  console.info('NG Element created successfully!');
})();
