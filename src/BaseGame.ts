export default class BaseGame {
  stopMain = NaN;
  tickLength = 50;
  lastTick: number;
  lastRender: number;

  constructor() {
    const startTime = performance.now();
    this.lastTick = startTime;
    this.lastRender = startTime;
  }

  init() {
    this.main(performance.now());
  }

  stopGame() {
    window.cancelAnimationFrame(this.stopMain);
  }

  queueUpdates(numTicks: number) {
    for (var i = 0; i < numTicks; i++) {
      this.lastTick = this.lastTick + this.tickLength;
      this.update(this.lastTick);
    }
  }

  main = (tFrame: DOMHighResTimeStamp) => {
    this.stopMain = window.requestAnimationFrame(this.main);
    const nextTick = this.lastTick + this.tickLength;
    let numTicks = 0;

    if (tFrame > nextTick) {
      const timeSinceTick = tFrame - this.lastTick;
      numTicks = Math.floor(timeSinceTick / this.tickLength);
    }

    this.queueUpdates(numTicks);
    this.render(tFrame);
    this.lastRender = tFrame;
  };

  render(tFrame: DOMHighResTimeStamp) {}
  update(lastTick: number) {}
}
