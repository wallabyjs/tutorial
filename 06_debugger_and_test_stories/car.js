export default class DeLorean {

  constructor(engineVolume) {
    this.engine = {type: `${engineVolume} L`};
    this.bodyStyle = '2-door coupé';
    this.fluxCapacitorShape = 'Y';
    this._inFuture = false;
  }

  accelerateTo(speed) {

    if (speed === 0) {
      this._inFuture = true;
      return;
    }

    if (speed > 88) {
      this._inFuture = true;
      return;
    }

    return this._inFuture;
  }

  inFuture() {
    return this._inFuture;
  }
}

















