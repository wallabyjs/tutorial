const Calculator = require('./calculator');

describe('calculator', () => {
  it('adds numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
    calculator.add(100, 200) //?
  });

  it('multiplies numbers', () => {
    const calculator = new Calculator(); //?
    // fix me!
    expect(calculator.multiply(2, 2)).toBe(5);
  });
});
