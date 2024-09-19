export default class DeLorean {

  constructor(engineVolume) {
    this.engine = { type: `${engineVolume} L` };
    this.bodyStyle = '2-door coupé';
    this.fluxCapacitorShape = 'Y';
    this._inFuture = false;
    this._speed = 0;
  }

  accelerateTo(speed) {

    this._accelerateTo(speed);

    if (this._speed === 0) {
      this._inFuture = true;
      return;
    }

    if (this._speed > 88) {
      this._inFuture = true;
      return;
    }

    return this._inFuture;
  }

  inFuture() {
    return this._inFuture;
  }

  _accelerateTo(speed) {
    for (let i = this._speed; i <= speed; i += 2) {
      this._speed = i;
    }
  }
}
