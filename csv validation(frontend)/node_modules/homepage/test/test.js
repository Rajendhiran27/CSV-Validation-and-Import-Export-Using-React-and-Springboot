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
var assert = require('assert');
var homepage = require('../index');

describe('homepage cli', function() {
  describe('should open https://github.com/tunnckoCore/homepage', function() {
    it('when 1st arg is object and promise:true', function (done) {
      this.timeout(15000);
      homepage({promise: true})
      .then(function resolve(res) {
        assert(typeof res === 'object' && typeof res.visit === 'string')
        assert(res.visit === 'https://github.com/tunnckoCore/homepage')
        done()
      })
    });
  });

  describe('should open url when', function() {
    it('2nd arg `callback`', function (done) {
      this.timeout(15000);
      homepage('mocha', function(err, res) {
        assert(err === null)
        assert(typeof res === 'object' && typeof res.visit === 'string')
        done()
      })
    });

    it('2nd arg `true`, 3rd `callback`', function (done) {
      this.timeout(15000);
      homepage('express', true, function(err, res) {
        assert(err === null)
        assert(typeof res === 'object' && typeof res.visit === 'string')
        done()
      })
    });

    it('2nd arg `false`, 3rd `callback`', function (done) {
      this.timeout(15000);
      homepage('gulp', false, function(err, res) {
        assert(err === null)
        assert(typeof res === 'object' && typeof res.visit === 'string')
        done()
      })
    });

    it('2nd arg `options.promise:true`, 3rd `callback` - not used', function (done) {
      this.timeout(15000);
      homepage('connect', {promise: true}, function(err, res) {
        console.log('not come here', err, res)
      })
      .then(function resolve(res) {
        assert(typeof res === 'object' && typeof res.visit === 'string')
        done()
      })
    });

    it('1st arg `options`, 2nd `callback`', function (done) {
      this.timeout(15000);
      homepage({name: 'koa'}, function(err, res) {
        assert(err === null)
        assert(typeof res === 'object' && typeof res.visit === 'string')
        done()
      })
    });

    it('1st arg `options`, `promise:true`, 2nd `callback` - not used', function (done) {
      this.timeout(15000);
      homepage({name: 'lodash', promise: true}, function(err, res) {
        console.log('not come here', err, res)
      })
      .then(function resolve(res) {
        assert(typeof res === 'object' && typeof res.visit === 'string')
        done()
      })
    });

    it('1st arg `options`, `promise:false`, 2nd `callback` used', function (done) {
      this.timeout(15000);
      homepage({name: 'underscore', promise: false}, function(err, res) {
        assert(err === null)
        assert(typeof res === 'object' && typeof res.visit === 'string')
        done()
      })
    });
  });

  describe('should throw error when', function() {
    it('1st arg `string` isnt in registry, 2nd `callback` used', function (done) {
      homepage('_PackageNotFoundInRegistry_', function(err, res) {
        assert(err instanceof Error)
        assert(err.message === 'Package not found in registry: _PackageNotFoundInRegistry_')
        assert(res === undefined)
        done()
      })
    });

    it('1st arg `string` isnt in registry, 2nd `object` promise:true', function (done) {
      homepage('__PromiseNotFound__', {promise:true})
      .catch(function reject(err) {
        assert(err instanceof Error)
        assert(err.message === 'Package not found in registry: __PromiseNotFound__')
        done()
      })
    });

    it('1st arg is `object` name isnt in registry, promise:true', function (done) {
      homepage({name: '__NotInRegistry__', promise:true})
      .catch(function reject(err) {
        assert(err instanceof Error)
        assert(err.message === 'Package not found in registry: __NotInRegistry__')
        done()
      })
    });
  });
});

