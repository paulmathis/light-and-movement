/** Creates a canvas context at the given canvas elementId */
export default class CanvasCtx {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor(elementId: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);
    this.ctx = this.canvas.getContext('2d')!;
  }

  /** Draw a rectangle */
  drawRect(
    cord: { x: number; y: number },
    width: number,
    height: number,
    color: string | CanvasGradient | CanvasPattern
  ) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(cord.x, cord.y, width, height);
  }
}
