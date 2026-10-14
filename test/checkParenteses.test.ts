import { describe, it, expect } from 'vitest';
import { checkParentheses } from '../src/checkParentheses.js';

describe('checkParentheses', () => {
  it('sorts digits in descending order', () => {
  expect(checkParentheses("()")).toBe(true);
expect(checkParentheses("([]]")).toBe(false);
expect(checkParentheses("([{}])")).toBe(true);
expect(checkParentheses("([[{}]]]")).toBe(false);
expect(checkParentheses(")")).toBe(false);
expect(checkParentheses("(]}])")).toBe(false);
expect(checkParentheses("([)]")).toBe(false);
expect(checkParentheses("{")).toBe(false);
  });
});