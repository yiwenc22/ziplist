const testArr = ['a', 'b', 'c'];
const testArr2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
}
console.log(zipList(testArr, testArr2));

function zipSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipSimpleWay(testArr, testArr2));
