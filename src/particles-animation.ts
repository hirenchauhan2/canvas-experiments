import { Particle } from "./particle";

const particles: Particle[] = [];

let hue = 0;
const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>(
  "#canvas",
)!;

const context = canvas.getContext("2d")!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const createParticles = (x: number, y: number) => {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(x, y, hue, context));
  }
};

const animateParticles = () => {
  particles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
};

const animate = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  hue += 2;
  animateParticles();

  requestAnimationFrame(animate);
};

canvas.addEventListener("mousemove", (event) => {
  createParticles(event.x, event.y);
});

createParticles(Math.random() * 20, Math.random() * 10);
animate();
