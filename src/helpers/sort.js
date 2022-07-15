export function ascendingSort(arr) {
  const sortedArray = [...arr].sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
  return sortedArray;
}

export function descendingSort(arr) {
  const sortedArray = [...arr].sort(function (a, b) {
    if (b.name > a.name) return 1;
    if (b.name < a.name) return -1;
    return 0;
  });
  return sortedArray;
}
