export default class Car {
  constructor(initialSpeed) {
    this.engine = '2.85 L';
    this.power = '97 kW';
    this.assembly = 'DeLorean Motor Cars, Ltd.';
    this.transmission = {
      type: 'manual',
      speed: 5
    };
    this.length = 4267;
    this.width = 1988;
    this.speed = initialSpeed;
  }

  accelerate() {
    this.speed++;
    return 'going faster';
  }

  brake() {
    this.speed--;
    return 'going slower';
  }
}
