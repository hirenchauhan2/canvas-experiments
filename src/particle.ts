export class Particle {
  private x = 0;
  private y = 0;
  private radius = Math.random() * 8;
  private ctx: CanvasRenderingContext2D | null = null;
  private speedY = 0;
  private speedX = 0;
  private color = "";
  private hue = 0;

  constructor(
    x: number,
    y: number,
    hue: number,
    context: CanvasRenderingContext2D,
  ) {
    this.x = x;
    this.y = y;
    this.ctx = context;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.hue = hue;
    this.color = `hsl(${this.hue}, 100%, 50%)`;
  }

  draw() {
    if (this.ctx !== null) {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }

  update() {
    this.hue += Math.random() * 5 - 1.5;
    this.color = `hsl(${this.hue}, 100%, 50%)`;

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > window.innerWidth || this.x < 0) {
      this.speedX = -this.speedX;
    }

    if (this.y > window.innerHeight || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }
}
