class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    if (a > 0 && b > 0) return a * b;
    return 0;
  }
}

describe('calculator', () => {
  it('adds numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
    calculator.add(100, 200) //?
  });

  it('multiplies numbers', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(0, 2)).toBe(0);
    expect(calculator.multiply(2, 0)).toBe(0);
    expect(calculator.multiply(2, 2)).toBe(4);
  });
});
