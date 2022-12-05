function fitsInOneBox(boxes: TProps[]) {
  const sortedBoxes = boxes.sort((a, b) => a.l - b.l);
  for (const index of sortedBoxes.keys()) {
    if (index === sortedBoxes.length - 1) return true;
    if (sortedBoxes[index].l >= sortedBoxes[index + 1].l) {
      return false;
    }
    if (sortedBoxes[index].w >= sortedBoxes[index + 1].w) {
      return false;
    }
    if (sortedBoxes[index].h >= sortedBoxes[index + 1].h) {
      return false;
    }
  }
  return true;
}

type TProps = {
  l: number;
  w: number;
  h: number;
};

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 3, h: 3 },
];

console.log(fitsInOneBox(boxes));
