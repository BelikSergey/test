const eachColorToHex = function (rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

const rgbToHex = (r, g, b) => {
  const red = eachColorToHex(r);
  const green = eachColorToHex(g);
  const blue = eachColorToHex(b);
  return ('#' + red + green + blue).toUpperCase();
};

export default rgbToHex;
