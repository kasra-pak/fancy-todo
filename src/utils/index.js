const moveElement = (arr, idx, targetIdx) => {
  // Moves the element at idx to targetIdx
  // Returns new array
  const arrCopy = [...arr];
  const [movedEl] = arrCopy.splice(idx, 1);
  arrCopy.splice(targetIdx, 0, movedEl);

  return arrCopy;
};

export { moveElement };
