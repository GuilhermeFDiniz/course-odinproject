import {describe, expect, test} from '@jest/globals';
import capitalize from './capitalize.js';

describe('capitalize', () => {
  test('capitalize word to be Word', () => {
    expect(capitalize('tommy')).toBe('Tommy');
  });
});


describe('capitalize', () => {
  test('capitalize word to be Word', () => {
    expect(capitalize('tOmmy')).toBe('Tommy');
  });
});

describe('capitalize', () => {
  test('capitalize word to be Word', () => {
    expect(capitalize('Tommy')).toBe('Tommy');
  });
});
