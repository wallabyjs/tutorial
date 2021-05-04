it('slower test', () => {
  return new Promise(y => {
    setTimeout(() => {
      expect(1).toBe(1);
      y();
    }, 1000);
  });
});

it('faster test', () => {
  expect(1).toBe(2);
});
