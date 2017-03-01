# handmade-fs

[![handmade-fs on NPM](https://img.shields.io/npm/v/handmade-fs.svg?style=flat-square)](https://www.npmjs.com/package/handmade-fs) [![handmade-fs on Travis](https://img.shields.io/travis/callmecavs/handmade-fs.svg?style=flat-square)](https://travis-ci.org/callmecavs/handmade-fs) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![handmade-fs Stability Index](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)

File system tasks for [handmade](https://github.com/callmecavs/handmade).

## Install

```sh
# via npm
$ npm i handmade-fs --save

# via yarn
$ yarn add handmade-fs
```

## Use

handmade-fs exports `read` and `write` tasks.

```javascript
const {
  read,
  write
} = require('handmade-fs')
```

### .read(path)

Accepts a path to an existing folder, relative to the root of the build.

Recursively reads contents of all files within, populating the build object with the file data.

```javascript
const handmade = require('handmade')
const { read } = require('handmade-fs')

// read path is relative to this context
handmade(__dirname)
  // relative path to source files
  .task(read('./src'))

  .task(contents => new Promise((resolve, reject) => {
    // in subsequent tasks, access the read path and file data from the core
    const { core } = contents

    const {
      files,
      read
    } = core
  }))

  // start the build
  .build()
```

## Roadmap

- [ ] Add `merge` option (read multiple folders into same object)

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
