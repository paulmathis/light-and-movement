type Vector = {
  x: number;
  y: number;
};

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
    cords: Vector,
    width: number,
    height: number,
    color: CanvasFillStrokeStyles['fillStyle']
  ) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(cords.x, cords.y, width, height);
  }

  drawCircle(
    cords: Vector,
    radius: number,
    color: CanvasFillStrokeStyles['fillStyle']
  ) {
    this.ctx.beginPath();
    this.ctx.arc(cords.x, cords.y, radius, 0, Math.PI * 2, true);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  context() {
    return this.ctx;
  }
}
