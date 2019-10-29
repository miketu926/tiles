export const removeLetter = (arr, letter) => {
  const newArr = [];
  const lastOccurance = arr.lastIndexOf(letter);

  for (let i = 0; i < arr.length; i++) {
    if (i === lastOccurance) continue;
    newArr.push(arr[i]);
  }

  return newArr;
};