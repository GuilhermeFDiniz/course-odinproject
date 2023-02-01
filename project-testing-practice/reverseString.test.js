import {describe, expect, test} from '@jest/globals';
import reverseString from './reverseString.js'

describe('Reverse String', ()=> {
  test('Reverse String  to be ', ()=>{
    expect(reverseString('')).toBe('')
  })
})

describe('Reverse String', ()=> {
  test('Reverse String a to be a', ()=>{
    expect(reverseString('a')).toBe('a')
  })
})

describe('Reverse String', ()=> {
  test('Reverse String hello to be olleh', ()=>{
    expect(reverseString('hello')).toBe('olleh')
  })
})

describe('Reverse String', ()=> {
  test('Reverse String "hellO" to be "Olleh"', ()=>{
    expect(reverseString('hellO')).toBe('Olleh')
  })
})

describe('Reverse String', ()=> {
  test('Reverse String "hello, kids" to be "sdik ,olleh"', ()=>{
    expect(reverseString('hello')).toBe('olleh')
  })
})
