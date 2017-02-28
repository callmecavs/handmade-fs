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
    const toAbs = item => path.join(__dirname, item)

    const expected = {
      [toAbs('./input/top-1.txt')]: 'top 1 content',
      [toAbs('./input/top-2.txt')]: 'top 2 content',
      [toAbs('./input/folder/mid-3.txt')]: 'mid 3 content',
      [toAbs('./input/folder/mid-4.txt')]: 'mid 4 content',
      [toAbs('./input/folder/folder/bot-5.txt')]: 'bot 1 content'
    }

    handmade(__dirname)
      .task(read('./input'))
      .build()
      .then(result => {
        assert.deepEqual(result, expected)
        done()
      })
      .catch(error => console.log(error))
  })
})
