let countBinarySearch = 0,
  arrayRandomNumbers = Array(40).fill(0).map((value, indexValue) => indexValue + 4);
function binSearch(inputValue, arrayRandomNumbers) {
  // inputValue - аргумент который надо найти
  // arrayRandomNumbers -список массив элементов в котором будет проводится поиск
  let left = 0,
    right = arrayRandomNumbers.length - 1
  while (left <= right) {
    countBinarySearch++;
    let midl = Math.floor((right + left) / 2);
    if (arrayRandomNumbers[midl] > inputValue) {
      right = midl - 1
    }
    else if (arrayRandomNumbers[midl] < inputValue) { left = midl + 1 }
    else { return midl }
  }
}

// console.log(arrayRandomNumbers);
// alert.call(arrayRandomNumbers)
window.alert(binSearch(10, arrayRandomNumbers))
window.alert(countBinarySearch)