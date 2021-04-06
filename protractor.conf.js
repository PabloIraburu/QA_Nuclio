/* eslint-disable global-require */
const extend = require('extend');

const baseConfig = require('./typeScript/config/protractor.base.config.js');


let protractorConfig = extend(true, {}, baseConfig);

if (process.env.TAGS && process.env.TAGS.indexOf(',') > 0) {
  const tags = process.env.TAGS.replace(',', ' or ');
  protractorConfig = extend(true, {}, protractorConfig, {cucumberOpts: {tags: tags}});
}

module.exports = {
    config: protractorConfig,
};
