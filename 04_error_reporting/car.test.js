import Car from './car';

let car;

describe('car', () => {

  beforeEach(() => {
    car = new Car(88);
  });

  it('accelerates', () => {
    car.accelerate();
    expect(car).toMatchSnapshot();
  });

  it.todo('decelerates');

  it('brakes', () => {
    car.brake();
    expect(car.speed).toBe(87);
  });

});
