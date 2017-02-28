'use strict'

const writedir = require('./writedir.js')
const writefile = require('./writefile.js')

const task = dir => contents => new Promise((resolve, reject) => {
  const { core } = contents

  // create directories for output files, then write the output files
  writedir(dir, contents)
    .then(writefile)
    .then(() => {
      // add the write path to the core
      core.write = dir

      // resolve the modified contents
      resolve(contents)
    })
    .catch(reject)
})

module.exports = task
