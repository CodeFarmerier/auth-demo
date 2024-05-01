import Color from "color";
import MersenneTwister from "mersenne-twister";

const COLORS = [
  "#01888C", // teal
  "#FC7500", // bright orange
  "#034F5D", // dark teal
  "#F73F01", // orangered
  "#FC1960", // magenta
  "#C7144C", // raspberry
  "#F3C100", // goldenrod
  "#1598F2", // lightning blue
  "#2465E1", // sail blue
  "#F19E02", // gold
];

let generator: MersenneTwister;
let remainingColors: string[];

export default function createJazzIcon(address: string, diameter: number = 64) {
  generator = new MersenneTwister(parseInt(address.slice(2, 10), 16));

  const wobble = 30;
  const amount = generator.random() * 30 - wobble / 2;
  remainingColors = COLORS.slice().map((hex) => colorRotate(hex, amount));

  const bg = genColor();

  const svg = initShap(diameter);

  const shapeCount = 4;

  for (let i = 0; i < shapeCount - 1; i++) {
    const total = shapeCount - 1;
    const center = diameter / 2;

    const shape = initShap(diameter, "rect");

    const firstRot = generator.random();
    const angle = Math.PI * 2 * firstRot;
    const velocity =
      (diameter / total) * generator.random() + (i * diameter) / total;

    const translate = `translate(${Math.cos(angle) * velocity} ${
      Math.sin(angle) * velocity
    })`;

    // Third random is a shape rotation on top of all of that.
    const secondRot = generator.random();
    const rot = firstRot * 360 + secondRot * 180;
    const rotate = `rotate(${rot.toFixed(1)} ${center} ${center})`;

    shape.setAttribute("transform", `${translate} ${rotate}`);
    shape.setAttributeNS(null, "fill", genColor());

    svg.appendChild(shape);
  }

  return { svg, bg };
}

function initShap(diameter: number | string, qualifiedName: string = "svg") {
  const shap = document.createElementNS(null, qualifiedName);
  shap.setAttribute("x", "0");
  shap.setAttribute("y", "0");
  shap.setAttribute("width", diameter.toString());
  shap.setAttribute("height", diameter.toString());

  return shap;
}

function genColor() {
  generator.random();
  const idx = Math.floor(remainingColors.length * generator.random());
  const color = remainingColors.splice(idx, 1)[0];
  return color;
}

function colorRotate(hex: string, degrees: number) {
  const hsl = Color(hex).hsl().array();

  hsl[0] = (hsl[0] + degrees) % 360;
  hsl[0] = hsl[0] < 0 ? 360 + hsl[0] : hsl[0];

  return Color(hsl, "hsl").hex();
}
