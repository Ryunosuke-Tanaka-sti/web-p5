import p5 from "p5";
import "./style.css";

const windowSize = (): [number, number] => [
  window.innerWidth,
  window.innerHeight,
];

const targetSize = (): [number, number] => {
  const target = document.getElementById("canvas");
  if (target) {
    return [target.clientWidth, target.clientHeight];
  }
  return windowSize();
};

const sketch = (p: p5) => {
  let y = 0;
  p.setup = () => {
    const [windowWidth, windowHeight] = targetSize();
    const canvas = p.createCanvas(windowWidth, windowHeight);
    canvas.parent("canvas");
  };

  p.draw = () => {
    p.background(255);
    const [windowWidth, windowHeight] = targetSize();
    y = y - 1;
    if (y < 0) {
      y = windowHeight;
    }
    p.line(0, y, windowWidth, y);
  };

  p.windowResized = () => {
    const [windowWidth, windowHeight] = targetSize();
    p.resizeCanvas(windowWidth, windowHeight);
  };
};

new p5(sketch);
