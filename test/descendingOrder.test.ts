import { describe, it, expect } from 'vitest';
import { descendingOrder } from '../src/descendingOrder.js';

describe('descendingOrder', () => {
  it('sorts digits in descending order', () => {
    expect(descendingOrder(3008)).toBe(8300);
    expect(descendingOrder(1989)).toBe(9981);
    expect(descendingOrder(2679)).toBe(9762);
    expect(descendingOrder(9163)).toBe(9631);
    
    expect(descendingOrder(0)).toBe(0);
  });
});