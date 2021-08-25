import {add, multiply} from './calculator'

it('adds numbers', () => {
  expec(add(1, 2)).toBe(3);
});

it('multiplies numbers', () => {
  expect(multiply(3, 2)).toBe(6);
});
