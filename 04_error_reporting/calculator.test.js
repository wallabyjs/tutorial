import { multiply } from './calculator'

describe('calculator', () => {
  it('multiplies numbers', () => {
    expect(multiply(3, 2)).toBe(6);
  });
});
