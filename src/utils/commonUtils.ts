export function findIndexByKeyValue(array: any, key: any, value: any) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}
