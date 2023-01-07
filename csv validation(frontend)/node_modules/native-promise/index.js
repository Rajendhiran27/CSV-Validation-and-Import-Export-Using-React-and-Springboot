/*!
 * native-promise <https://github.com/tunnckoCore/native-promise>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = typeof global === 'object' && global.Promise ||
  typeof window === 'object' && window.Promise ||
  typeof Promise !== 'undefined' && Promise ||
  false
