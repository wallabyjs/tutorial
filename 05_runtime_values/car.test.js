import Car from './car';

let car;

describe('car', () => {

  beforeEach(() => {
    car = new Car(88);
  });

  it('has correct engine', () => {
    // console.log(car);
    expect(car.engine).toBe('2.94 L');
  });

  it('brakes', () => {
    car.brake();
    expect(car.speed).toBe(87);
  });
});
