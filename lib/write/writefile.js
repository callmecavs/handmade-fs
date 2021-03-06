'use strict'

const fs = require('fs')

const writefile = contents => new Promise((resolve, reject) => {
  const { files } = contents.core

  const paths = Object.keys(files)

  let remaining = paths.length

  const check = () => {
    if (!remaining) return resolve(contents)
  }

  paths.forEach(path => {
    const content = files[path]

    fs.writeFile(path, content, error => {
      if (error) return reject(error)

      remaining -= 1
      check()
    })
  })
})

module.exports = writefile
