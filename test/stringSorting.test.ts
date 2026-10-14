import { describe, it, expect } from 'vitest';
import { sortStringWithNumbers } from '../src/stringSorting.js';

  describe('sortStringWithNumbers', () => {
  it('sorts strings with different prefixes and numeric parts', () => {
    expect(
      sortStringWithNumbers(['TH19', 'SG20', 'TH2'])
    ).toEqual(['SG20', 'TH2', 'TH19']);
  });

  it('sorts strings with numeric parts and suffixes', () => {
    expect(
      sortStringWithNumbers(['TH10', 'TH3Netflix', 'TH1', 'TH7'])
    ).toEqual(['TH1', 'TH3Netflix', 'TH7', 'TH10']);
  });

  it('returns an empty array when the input is empty', () => {
    expect(sortStringWithNumbers([])).toEqual([]);
  });

  it('handles an array with one item', () => {
    expect(sortStringWithNumbers(['TH10'])).toEqual(['TH10']);
  });

  it('sorts numeric parts in natural order', () => {
    expect(
      sortStringWithNumbers(['TH10', 'TH2', 'TH1'])
    ).toEqual(['TH1', 'TH2', 'TH10']);
  });
});


