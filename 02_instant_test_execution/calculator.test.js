import { add, min } from './calculator'

describe('calculator', () => {

  it('slower test', () => {
    return new Promise(y => {
      setTimeout(() => {
        expect(1).toBe(1);
        y();
      }, 1000);
    });
  });

  it('adds numbers', () => {
    const result = add(2, 22); //
    expect(result).toBe(5);
  });

  it('finds min number', () => {
    expect(min(2, 1)).toBe(1);
  })
});