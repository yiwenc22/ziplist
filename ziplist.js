const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(zipList(list1, list2));

function zipUnderscore(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipUnderscore(list1, list2));
