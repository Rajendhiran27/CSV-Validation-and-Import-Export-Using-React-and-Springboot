# [native-promise][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Get native `Promise` or falsey value if not available.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i native-promise --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var NativePromise = require('native-promise')

if (NativePromise) {
  var promise = NativePromise.resolve(123)
  promise.then(function (res) {
    console.log(res) //=> 123
  })
} else {
  console.log(NativePromise) //=> false
}
```


## Related
- [always-done](https://github.com/tunnckoCore/always-done): Handles completion and errors of anything!
- [always-promise](https://github.com/tunnckoCore/always-promise): Promisify basically **everything**.
- [native-or-another](https://github.com/tunnckoCore/native-or-another): Always will expose native `Promise` if available, otherwise `Bluebird` but only if you don't give another promise module like `q` or `promise` or what you want.
- [redolent](https://github.com/tunnckoCore/redolent): Simple promisify a callback-style function with sane defaults.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/native-promise/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/native-promise
[npmjs-img]: https://img.shields.io/npm/v/native-promise.svg?label=native-promise

[license-url]: https://github.com/tunnckoCore/native-promise/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/native-promise
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/native-promise.svg

[travis-url]: https://travis-ci.org/tunnckoCore/native-promise
[travis-img]: https://img.shields.io/travis/tunnckoCore/native-promise.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/native-promise
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/native-promise.svg

[david-url]: https://david-dm.org/tunnckoCore/native-promise
[david-img]: https://img.shields.io/david/dev/tunnckoCore/native-promise.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg