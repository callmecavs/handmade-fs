'use strict'

const pathTo = str => `./lib/${str}`

module.exports = {
  read: require(pathTo('read')),
  write: require(pathTo('write'))
}
