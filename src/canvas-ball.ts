const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>(
  "#canvas",
)!;

const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x: number, y: number, radius: number, dx: number, dy: number;

let prevAnimationRequestId: number;

const canvasClickHandler = (event: MouseEvent) => {
  x = event.x;
  y = event.y;

  radius = Math.random() * 20;
  dx = 1;
  dy = 1;

  if (prevAnimationRequestId !== undefined) {
    cancelAnimationFrame(prevAnimationRequestId);
  }

  drawCirlce(x, y);
  animate();
};

const drawCirlce = (x: number, y: number) => {
  context?.beginPath();
  context?.arc(x, y, radius, 0, 2 * Math.PI);
  context!.strokeStyle = "#f00";
  context?.stroke();
  context!.fillStyle = "#f00";
  context?.fill();
};

const animate = () => {
  context?.clearRect(0, 0, window.innerWidth, window.innerHeight);

  drawCirlce(x, y);

  x = x + dx;
  y = y + dy;

  const ballEdgeXStart = x - radius;
  const ballEdgeXEnd = x + radius;
  const ballEdgeYStart = y - radius;
  const ballEdgeYEnd = y + radius;

  if (ballEdgeXEnd > window.innerWidth || ballEdgeXStart < 0) {
    dx = -dx;
  }

  if (ballEdgeYEnd > window.innerHeight || ballEdgeYStart < 0) {
    dy = -dy;
  }

  prevAnimationRequestId = requestAnimationFrame(animate);
};

canvas.addEventListener("click", canvasClickHandler);
