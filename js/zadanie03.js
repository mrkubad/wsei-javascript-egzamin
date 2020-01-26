const biggestSumOfTwoElements = arr => {
    if(arr.length == 0)
        return false;
    const firstBiggest = Math.max(...arr);
    const indexOfFirstBiggest = arr.indexOf(firstBiggest);
    if(indexOfFirstBiggest > -1)
        arr.splice(indexOfFirstBiggest, 1);
    return firstBiggest + (arr.length > 0 ? Math.max(...arr) : 0);
}

console.log(biggestSumOfTwoElements([1,2,3,4]));
console.log(biggestSumOfTwoElements([]));
console.log(biggestSumOfTwoElements([76]));
console.log(biggestSumOfTwoElements([23,45,17,12]));