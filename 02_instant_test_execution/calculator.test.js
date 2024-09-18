import { add, min } from './calculator'

describe('calculator', () => {
  it('adds numbers', () => {
    const result = add(2, 2); //
    expect(result).toBe(5);
  });

  it('finds min number', () => {
    expect(min(1, 2)).toBe(1);
  })
});