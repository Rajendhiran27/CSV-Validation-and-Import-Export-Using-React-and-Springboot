# homepage [![NPM version][npmjs-shields]][npmjs-url] [![Dependency Status][depstat-img]][depstat-url] [![Coveralls][coveralls-shields]][coveralls-url]
> Open NPM package/module homepage url from NPM registry.  
Support CLI and Promises

## Shortcuts
- [Install](#install-)
- [Usage](#usage)
- [Tests](#tests)
- [API docs](#api)
- [Command-line](#cli)
- [Related projects](#related)
- [Authors & Contributors](#authors--contributors)
- [License](./license.md)
- [History](./history.md)


## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install homepage -g
$ homepage --help
```


## Usage
> You can also see [bin/cli.js](./bin/cli.js), [tests](./test/test.js) for more example usages

**promise example (open self)**
```js
homepage({promise: true})
  .then(function resolve(res) {
    assert(typeof res === 'object' && typeof res.visit === 'string')
    assert(res.visit === 'https://github.com/tunnckoCore/homepage')
  })
```
**callback example (open mocha)**
```js
homepage('mocha', function(err, res) {
  assert(err === null)
  assert(typeof res === 'object' && typeof res.visit === 'string')
  console.log(res.visit)
  //=> https://github.com/mochajs/mocha
})
```


## Tests
> You can also use `make test`

```
$ npm test
```


## API

#### homepage(name, [options], [callback])
- `name` **{String|Object}** Name of the npm package
- `options` **{Object|Fn}** Options can be callback, if repo is object and `.promise: false`
  - `name` **{String}** Name of the npm package
  - `promise` **{Boolean}** Handle response with promise - true/false or empty
- `callback` **{Fn}** Node-style callback, same as always


## CLI
```
$ homepage --help
```

### Flags
> Flags can be used in any order.

- `--help`
- `--version`
- `-n`|`--name`|`1st arg` **{String}** Name of the npm package
- `-p`|`--promise`|`2nd arg` **{Boolean}** Handle response with promise - true/false or empty

**Example usage**
```
$ homepage <name> [promise]
$ homepage mocha                        # open github.com/mochajs/mocha
$ homepage -n koa -p                    # open github.com/koajs/koa
$ homepage gulp                         # open gulpjs.com
$ homepage lodash -p                    # open lodash.com
$ homepage --promise --name assemble    # open assemble.io
$ homepage -n express                   # open expressjs.com
```


## Authors & Contributors

**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][author-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/homepage/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[downloads-img]: http://img.shields.io/npm/dm/homepage.svg
[npm-required-version-img]: http://img.shields.io/badge/npm-%3E=%201.4.28-blue.svg
[node-required-version-img]: https://img.shields.io/node/v/homepage.svg
[node-required-version-url]: http://nodejs.org/download/

[npmjs-url]: http://npm.im/homepage
[npmjs-fury]: https://badge.fury.io/js/homepage.svg
[npmjs-shields]: https://img.shields.io/npm/v/homepage.svg
[npmjs-install]: https://nodei.co/npm/homepage.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/homepage?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/homepage.svg

[license-url]: https://github.com/tunnckoCore/homepage/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/homepage
[travis-img]: https://travis-ci.org/tunnckoCore/homepage.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/homepage
[depstat-img]: https://david-dm.org/tunnckoCore/homepage.svg

[ferver-img]: http://img.shields.io/badge/using-ferver-585858.svg
[ferver-url]: https://github.com/jonathanong/ferver

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
[author-more]: http://j.mp/1stW47C

[cobody-url]: https://github.com/tj/co-body
[mocha-url]: https://github.com/tj/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[express-url]: https://github.com/strongloop/express
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/tj/co
[extend-url]: https://github.com/justmoon/node-extend
[csp-report]: https://mathiasbynens.be/notes/csp-reports
