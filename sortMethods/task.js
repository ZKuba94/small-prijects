// Task 1
// Solution 1 - swap sort, bubble sort
const array1 = [33, 4, -6, 55, 4, 3, 0, -44];
const sort = arr => {
        if (arr === undefined || arr.length === 0) {
            return console.log('Empty array');
        }
        let i = 0;
        while (i < arr.length) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let higherNumber = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = higherNumber;
                }
            }
            i++
        }
// for (let i = 0; i < arr.length; i++) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let higherNumber = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = higherNumber;
//         }
//     }
// }
        return console.log(arr);
    }
;
sort(array1);

// Solution 2 - selection sort
const array2 = [25, 44, 17, 8, 6, 1, -8, 15, -22];
const sort2 = arr => {
    let sortedArray = [];
    const arrayLength = arr.length;
    if (arr.length === 0) {
        return console.log('Empty array');
    }
    for (let i = 0; i < arrayLength; i++) {
        let minValue = Math.min(...arr);
        arr.splice(arr.indexOf(minValue), 1);
        sortedArray.push(minValue);
    }
    return console.log(sortedArray);
};
sort2(array2);

// Solution 3 - function in method sort make it work correctly
let array3 = [33, 4, -6, 55, 4, 3, 0];
// let array4 = ['aaa', 'b', 'aa', 'a', 'bb'];
const sort3 = arr => {
    if (arr === undefined || arr.length === 0) {
        return console.log('Empty array');
    }
    return console.log(arr.sort((a, b) => a-b));
};
sort3(array3);