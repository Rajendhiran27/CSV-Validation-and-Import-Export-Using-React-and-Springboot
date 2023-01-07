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
var homepage = require('./lib/homepage');

/**
 * Open NPM package/module homepage url from NPM registry.
 * Support CLI and Promises.
 * 
 * @param  {String} `packageName`
 * @param  {Object} `options` optional
 * @param  {Function} `callback` optional
 * @return {undefined}
 */
module.exports = function homepageOpen(packageName, options, callback) {
  if (typeof packageName !== 'string' && typeof packageName !== 'object') {
    throw new TypeError('First argument must be object or string')
  }

  if (typeof packageName === 'object') {
    callback = options
    options = {};
    options.promise = packageName.promise || false
    options.headers = packageName.headers || {}
    packageName = packageName.name || 'homepage'
  }

  if (!callback && typeof options === 'function') {
    callback = options
    options = {};
  }

  options = typeof options === 'object' ? options : {}

  if (options.promise) {
    var Promise = require('native-or-another');
    return new Promise(function resolver(resolve, reject) {
      homepage(packageName, options, function(err, res) {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    });
  }
  
  if (typeof callback !== 'function') {
    throw new TypeError('Must have callback')
  }

  homepage(packageName, options, callback);
};
