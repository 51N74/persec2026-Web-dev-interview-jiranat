
import { describe, it, expect } from 'vitest';
import { intToRoman, romanToInt } from '../src/modernRomanNumerals.js';

describe('intToRoman', () => {
  it.each([
    [1989, 'MCMLXXXIX'],
    [2000, 'MM'],
    [68, 'LXVIII'],
    [109, 'CIX'],
    [1, 'I'],
    [3999, 'MMMCMXCIX'],
  ])('converts %i to %s', (input, expected) => {
    expect(intToRoman(input)).toBe(expected);
  });

  it.each([0, -1, 4000, 1.5])(
    'rejects invalid number %s',
    (input) => {
      expect(() => intToRoman(input)).toThrow(RangeError);
    }
  );
});

describe('romanToInt', () => {
  it.each([
    ['MCMLXXXIX', 1989],
    ['MM', 2000],
    ['LXVIII', 68],
    ['CIX', 109],
    ['I', 1],
    ['MMMCMXCIX', 3999],
  ])('converts %s to %i', (input, expected) => {
    expect(romanToInt(input)).toBe(expected);
  });

  it.each(['', 'IIII', 'VX', 'ABC', 'MMMM'])(
    'rejects invalid Roman numeral %s',
    (input) => {
      expect(() => romanToInt(input)).toThrow();
    }
  );
});
