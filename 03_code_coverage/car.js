export default class Car {
  constructor(initialSpeed) {
    this._speed = initialSpeed;
  }

  accelerate() {
    this._speed++;
  }

  brake() {
    this._speed--;
  }

  get speed() {
    return this._speed;
  }
}
