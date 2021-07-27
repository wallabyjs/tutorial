import Car from './car';

describe('DeLorean', () => {

  it('should not go to the future when is not fast enough', () => {
    const car = new Car(1.89);

    car.accelerateTo(87);
    expect(car.inFuture()).toBe(false);

    car.accelerateTo(0);
    expect(car.inFuture()).toBe(false);
  });

  it('should go to the future when is fast enough', () => {
    const car = new Car(1.89);
    car.accelerateTo(88);
    expect(car.inFuture()).toBe(true);
  });

});

