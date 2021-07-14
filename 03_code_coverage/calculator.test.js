class Calculator {
  add(a, b) {
    return a + b;
  }
}

describe('calculator', () => {
  it('adds numbers', () => {
    const calculator = new Calculator();
    // expect(calculator.add(1, 2)).toBe(3);
  });
});
