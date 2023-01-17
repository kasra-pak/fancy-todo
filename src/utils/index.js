const rangeValidation = (num, min, max) => {
  // Prevent a number from violating a specific range.
  if (num > max) return max;
  if (num < min) return min;
  return num;
};

const belowElement = (element, x, y) => {
  // Dissable pointer events for the element,
  // So that we can check what's behind it.
  element.style.pointerEvents = "none";
  const belowEl = document.elementFromPoint(x, y);
  element.style.pointerEvents = "auto";

  return belowEl;
};

const moveElement = (arr, idx, targetIdx) => {
  // Moves the element at idx to targetIdx
  // Returns new array
  const arrCopy = [...arr];
  const [movedEl] = arrCopy.splice(idx, 1);
  arrCopy.splice(targetIdx, 0, movedEl);

  return arrCopy;
};

export { rangeValidation, belowElement, moveElement };