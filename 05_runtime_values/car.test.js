import Car from './car';

let car;

describe('car', () => {

  beforeEach(() => {
    car = new Car(88);
  });

  it('has correct engine', () => {
    const engine = car.engine;
    expect(engine).toMatchSnapshot();
  });

  it('brakes', () => {
    car.brake();
    expect(car.speed).toBe(87);
  });
});