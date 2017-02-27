'use strict'

const readdir = require('./readdir.js')
const readfile = require('./readfile.js')

const task = dir => contents => new Promise((resolve, reject) => {
  const { core } = contents

  // recursively read filelist, then all files contents
  readdir(core.context, dir)
    .then(readfile)
    .then(res => {
      // add the read path to the core
      core.read = dir

      // ROADMAP: add merge option - check if files existing, deep merge if so
      // add the files object to the core
      core.files = res

      // resolve the modified contents
      resolve(contents)
    })
    .catch(reject)
})

module.exports = task
