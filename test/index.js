'use strict'

/* eslint-env mocha */

const assert = require('chai').assert
const handmade = require('handmade')
const path = require('path')

const {
  read,
  write
} = require('../')

const toAbs = item => path.join(__dirname, item)

const CONTEXT = __dirname
const TO_INPUT = './input'
const TO_OUTPUT = './output'

const FILES = {
  [toAbs('./input/top-1.txt')]: 'top 1 content\n',
  [toAbs('./input/top-2.txt')]: 'top 2 content\n',
  [toAbs('./input/folder/mid-1.txt')]: 'mid 1 content\n',
  [toAbs('./input/folder/mid-2.txt')]: 'mid 2 content\n',
  [toAbs('./input/folder/folder/bot-1.txt')]: 'bot 1 content\n'
}

describe('handmade-fs', () => {
  it('should read', done => {
    const expected = {
      core: {
        context: CONTEXT,
        files: FILES,
        read: TO_INPUT
      }
    }

    handmade(CONTEXT)
      .task(read(TO_INPUT))
      .build()
      .then(result => {
        assert.deepEqual(result, expected)
        done()
      })
      .catch(error => console.log(error))
  })

  it('should write', done => {
    const expected = {
      core: {
        context: CONTEXT,
        files: FILES,
        read: TO_INPUT,
        write: TO_OUTPUT
      }
    }

    handmade(CONTEXT)
      .task(read(TO_INPUT))
      .task(write(TO_OUTPUT))
      .build()
      .then(result => {
        assert.deepEqual(result, expected)
        done()
      })
      .catch(error => console.log(error))
  })
})
