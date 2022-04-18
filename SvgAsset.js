/*
    See: https://github.com/jaywcjlove/parcel-plugin-markdown-string/tree/5fac30bbaa30316c73d9faafbe443e4293e7c605
*/
const { Asset } = require('parcel-bundler');

class SvgAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }
  async parse(string) {
      this.code = string;
  }
  generate() {
    // Send to JS bundler
    return { 'js': `module.exports = ${JSON.stringify(this.code)}` };
  }
}

module.exports = SvgAsset;