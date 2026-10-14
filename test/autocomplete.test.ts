
import { describe, it, expect } from 'vitest';
import { autocomplete } from '../src/autocomplete.js';

describe('autocomplete', () => {
  it('ranks words starting with the query first', () => {
    expect(
      autocomplete(
        'th',
        ['Mother', 'Think', 'Worthy', 'Apple', 'Android'],
        2
      )
    ).toEqual(['Think', 'Mother']);
  });

  it('matches without case sensitivity', () => {
    expect(
      autocomplete('TH', ['mother', 'THink', 'WorTHy'], 3)
    ).toEqual(['THink', 'mother', 'WorTHy']);
  });

  it('ranks words ending with the query after middle matches', () => {
    expect(
      autocomplete('th', ['Tooth', 'Mother', 'Think'], 3)
    ).toEqual(['Think', 'Mother', 'Tooth']);
  });

  it('preserves input order when priorities are equal', () => {
    expect(
      autocomplete('th', ['Mother', 'Worthy', 'Method'], 3)
    ).toEqual(['Mother', 'Worthy', 'Method']);
  });

  it('returns an empty array when there are no matches', () => {
    expect(autocomplete('xyz', ['Mother', 'Think'], 3)).toEqual([]);
  });

  it('limits the number of results', () => {
    expect(
      autocomplete('th', ['Mother', 'Think', 'Worthy'], 1)
    ).toEqual(['Think']);
  });
});
