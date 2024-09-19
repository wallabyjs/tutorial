export default class Car {
  constructor(initialSpeed) {
    this.engine = '2.85 L';
    this.power = '97 kW';
    this.speed = initialSpeed;
    console.log(this);
  }

  accelerate() {
    this.speed++;
  }

  brake() {
    speed--;
  }
}
