import CanvasContext from './CanvasContext';

const canvasCtx = new CanvasContext('tutorial');

canvasCtx.drawRect({ x: 10, y: 10 }, 50, 50, 'rgb(200, 0, 0)');
canvasCtx.drawRect({ x: 30, y: 30 }, 50, 50, 'rgba(1, 0, 200, 0.5)');
