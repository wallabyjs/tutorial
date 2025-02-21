const Calculator = require('./calculator');

// Check out the comments below 👇

describe('calculator', () => {
  it('adds numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
    // with live comment see inline value change in real-time as you update the code
    calculator.add(100, 200) //?
  });

  it('multiplies numbers', () => {
    const calculator = new Calculator(); //?
    // Let's fix the error, try clicking Debug code lens on the test
    expect(calculator.multiply(2, 2)).toBe(5);
  });
});

/*
  Here are some more cool things you can quickly try:
  - 🐛 Time Travel Debugger    https://wallabyjs.com/docs/features/time-travel-debugger/
  - 🔎 Value Peek              https://wallabyjs.com/docs/features/advanced-logging/#value-peek 
  - 🔴 Logpoints               https://wallabyjs.com/docs/features/advanced-logging/#logpoints
  - 🤖 GitHub Copilot Support  https://wallabyjs.com/docs/features/copilot/

  - 📖 Detailed Wallaby Intro  https://wallabyjs.com/docs/intro/vs-code/
*/
