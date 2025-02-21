module.exports = class Calculator {
  constructor() {
    this._initialized = true;
  }

  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    if (a > 0 && b > 0) return a * b;
    return 0;
  }
}
