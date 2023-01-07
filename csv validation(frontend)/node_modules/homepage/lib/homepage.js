/**
 * homepage <https://github.com/tunnckoCore/homepage>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */
var oboe = require('oboe');
var _open = require('opn');

/**
 * Open NPM package/module homepage url from NPM registry.
 * Support CLI and Promises.
 * 
 * @param  {String} `packageName`
 * @param  {Object} `options`
 * @param  {Function} `callback`
 * @return {undefined}
 */
module.exports = function openHomepage(packageName, options, callback) {
  if (!options) {
    options.headers = {
      'user-agent': 'Badgelino.io',
      'accept': '*/*',
      'accept-encoding': 'gzip,deflate'
    }
  }
  options.headers = options.headers || {};
  options.headers['accept'] = '*/*'
  options.headers['accept-encoding'] = 'gzip,deflate'

  oboe({
    url: 'http://registry.npmjs.org/'+packageName+'/latest',
    method: 'GET',
    headers: options.headers
  })
  .node('homepage', function onDone(url){
    _open(url, function(err, stdout) {
      if (err) {
        callback(err);
        return;
      }
      //STDOUT can be string 'Created new window in existing browser session.'
      //when open url, but dont know how behave in the case with laguages
      if (!err && typeof stdout === 'string') {
        callback(null, {visit: url})
        return;
      }
      callback(new Error('Something goes wrong. Unknown error.'));
      return;
    })
  })
  .fail(function onFail(err) {
    if (err) {
      callback(new Error('Package not found in registry: '+packageName))
    }
    return;
  })
};
