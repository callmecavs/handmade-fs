'use strict'

const readdir = require('./readdir.js')
const readfile = require('./readfile.js')

const task = dir => contents => new Promise((resolve, reject) => {
  const { core } = contents
  const { context } = core
  let { files } = core

  // recursively read filelist, then all files contents
  readdir(base, dir)
    .then(readfile)
    .then(res => {
      // ROADMAP: add merge option
      // override the files in the core
      files = res

      // resolve the modified contents
      resolve(contents)
    })
    .catch(reject)
})

module.exports = task
