import Car from './car';

let car;

describe('car', () => {

  beforeEach(() => {
    car = new Car(88);
  });

  it('has correct engine', () => {
    expect(car.engine).toBe('2.94 L');
  });

  it('accelerates', () => {
    car.accelerate();
    expect(car).toMatchSnapshot();
  });

  it('brakes', () => {
    car.brake();
    expect(car.speed).toBe(87);
  });
});
