function searchElement(arr, element) {
  let index = arr.indexOf(element);
  return index !== -1 ? index : "not found";
}

console.log(searchElement([10, 20, 30], 20));