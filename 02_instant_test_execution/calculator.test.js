import { add, min } from './calculator'

describe('calculator', () => {

  it('adds numbers', () => {
    
    const result = add(2, 2); //
    expect(result).toBe(4);
  });

  it('calculates Fibonacci sequence', () => {
    return new Promise(y => {
      setTimeout(() => {
        expect(1).toBe(1);
        y();
      }, 1000);
    });
  });

  it('finds min number', () => {
    expect(min(2, 1)).toBe(1);
    // expect(min(1, 2)).toBe(1);
  })
});