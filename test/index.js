'use strict'

/* eslint-env mocha */

const assert = require('chai').assert
const handmade = require('handmade')
const path = require('path')

const {
  read,
  write
} = require('../')

describe('handmade-fs', () => {
  it('should read', done => {
    const toFiles = './input'
    const toAbs = item => path.join(__dirname, item)

    const expected = {
      core: {
        context: __dirname,
        files: {
          [toAbs('./input/top-1.txt')]: 'top 1 content\n',
          [toAbs('./input/top-2.txt')]: 'top 2 content\n',
          [toAbs('./input/folder/mid-1.txt')]: 'mid 1 content\n',
          [toAbs('./input/folder/mid-2.txt')]: 'mid 2 content\n',
          [toAbs('./input/folder/folder/bot-1.txt')]: 'bot 1 content\n'
        },
        read: toFiles
      }
    }

    handmade(__dirname)
      .task(read(toFiles))
      .build()
      .then(result => {
        assert.deepEqual(result, expected)
        done()
      })
      .catch(error => console.log(error))
  })
})
