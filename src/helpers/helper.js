export const cleareUserSorageCridentials = () => {
  localStorage.clear("authToken");
  localStorage.clear("userId");
};

export const drawImageProp = (ctx, img, x, y, w, h, offsetX, offsetY) => {
  // eslint-disable-next-line no-undef
  // if (arguments.length === 2) {
  //   x = y = 0;
  //   w = ctx.canvas.width;
  //   h = ctx.canvas.height;
  // }

  // default offset is center
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;

  var iw = img.width,
    ih = img.height,
    r = Math.min(w / iw, h / ih),
    nw = iw * r, // new prop. width
    nh = ih * r, // new prop. height
    cx,
    cy,
    cw,
    ch,
    ar = 1;

  // decide which gap to fill
  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
};

export const filters = {
  normal: "contrast(100%) brightness(100%) saturate(100%)",
  seventySeven: "contrast(110%) brightness(110%) saturate(130%) sepia(0%)",
  aden: "contrast(90%) brightness(120%) saturate(85%) sepia(0%) hue-rotate(20deg)",
  amaro:
    "contrast(90%) brightness(110%) saturate(150%) sepia(0%) hue-rotate(-10deg) grayscale(0%) invert(0%) blur(0px)",
  brannan:
    "contrast(140%) brightness(100%) saturate(100%) sepia(50%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  brooklin:
    "contrast(90%) brightness(110%) saturate(100%) sepia(0%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  clarendon:
    "contrast(120%) brightness(125%) saturate(100%) sepia(0%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  earlybird:
    "contrast(90%) brightness(100%) saturate(100%) sepia(20%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  gingham:
    "contrast(105%) brightness(100%) saturate(100%) sepia(0%) hue-rotate(350deg) grayscale(0%) invert(0%) blur(0px)",
  hudson:
    "contrast(90%) brightness(120%) saturate(110%) sepia(0%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  inkwell:
    "contrast(110%) brightness(110%) saturate(100%) sepia(30%) hue-rotate(0deg) grayscale(100%) invert(0%) blur(0px)",
  lofi: "contrast(150%) brightness(100%) saturate(110%) sepia(0%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  maven:
    "contrast(95%) brightness(95%) saturate(150%) sepia(25%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  reyes:
    "contrast(85%) brightness(110%) saturate(75%) sepia(22%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  stinson:
    "contrast(75%) brightness(115%) saturate(85%) sepia(0%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  toaster:
    "contrast(110%) brightness(110%) saturate(130%) sepia(0%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  walden:
    "contrast(110%) brightness(160%) saturate(100%) sepia(30%) hue-rotate(350deg) grayscale(0%) invert(0%) blur(0px)",
  valencia:
    "contrast(108%) brightness(108%) saturate(100%) sepia(8%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
  xpro: "contrast(100%) brightness(100%) saturate(100%) sepia(30%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)",
};
