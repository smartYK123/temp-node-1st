// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04.names')
const sayHi = require('./05.utils')
const data = require('./06.alternative')
require('./07.mind-grenade')
// console.log(sayHi)
console.log(data)
sayHi ('susan',12)
sayHi (names.john,11)
sayHi ('aina',10)