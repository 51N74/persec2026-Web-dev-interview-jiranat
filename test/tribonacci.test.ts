
import { describe, it, expect } from 'vitest';
import { tribonacci } from '../src/tribonacci.js';

describe('tribonacci', () => {
  it('generates the sequence from three initial values', () => {
    expect(tribonacci([1, 3, 5], 5)).toEqual([1, 3, 5, 9, 17]);
  });

  it('returns the initial values when n equals their length', () => {
    expect(tribonacci([2, 2, 2], 3)).toEqual([2, 2, 2]);
  });

  it('generates the next value from three initial values', () => {
    expect(tribonacci([10, 10, 10], 4)).toEqual([10, 10, 10, 30]);
  });

  it('returns an empty array when n is zero', () => {
    expect(tribonacci([1, 2, 3], 0)).toEqual([]);
  });

  it('handles an empty initial array', () => {
    expect(tribonacci([], 3)).toEqual([0, 0, 0]);
  });

  it('handles fewer than three initial values', () => {
    expect(tribonacci([1], 4)).toEqual([1, 1, 2, 4]);
  });

  it('does not modify the initial array', () => {
    const initial = [1, 3, 5];

    tribonacci(initial, 5);

    expect(initial).toEqual([1, 3, 5]);
  });

  it('rejects negative n', () => {
    expect(() => tribonacci([1, 2, 3], -1)).toThrow(RangeError);
  });

  it('rejects non-integer n', () => {
    expect(() => tribonacci([1, 2, 3], 2.5)).toThrow(RangeError);
  });
});
