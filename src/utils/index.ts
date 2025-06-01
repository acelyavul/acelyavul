export function colorGenerator() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

export function getDarkColor() {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

export function getColorByBgColor(bgColor: string): string {
  return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2
    ? "#000"
    : "#fff";
}

export * from "./images";
