// // Task 1
// // Solution 1 - swap sort, bubble sort
// const array1 = [33, 4, -6, 55, 4, 3, 0, -44];
// const sort = arr => {
//         if (arr === undefined || arr.length === 0) {
//             return console.log('Empty array');
//         }
//         let i = 0;
//         while (i < arr.length) {
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] > arr[i + 1]) {
//                     let higherNumber = arr[i];
//                     arr[i] = arr[i + 1];
//                     arr[i + 1] = higherNumber;
//                 }
//             }
//             i++
//         }
// // for (let i = 0; i < arr.length; i++) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > arr[i + 1]) {
// //             let higherNumber = arr[i];
// //             arr[i] = arr[i + 1];
// //             arr[i + 1] = higherNumber;
// //         }
// //     }
// // }
//         return console.log(arr);
//     }
// ;
// sort(array1);
//
// // Solution 2 - selection sort
// const array2 = [25, 44, 17, 8, 6, 1, -8, 15, -22];
// const sort2 = arr => {
//     let sortedArray = [];
//     const arrayLength = arr.length;
//     if (arr.length === 0) {
//         return console.log('Empty array');
//     }
//     for (let i = 0; i < arrayLength; i++) {
//         let minValue = Math.min(...arr);
//         arr.splice(arr.indexOf(minValue), 1);
//         sortedArray.push(minValue);
//     }
//     return console.log(sortedArray);
// };
// sort2(array2);
//
// // Solution 3 - function in method sort make it work correctly
// let array3 = [33, 4, -6, 55, 4, 3, 0];
// // let array4 = ['aaa', 'b', 'aa', 'a', 'bb'];
// const sort3 = arr => {
//     if (arr === undefined || arr.length === 0) {
//         return console.log('Empty array');
//     }
//     return console.log(arr.sort((a, b) => a-b));
// };
// sort3(array3);

// function to sort numbers, but leaving one value in the same place as at the beggining.
// const a = [23, 43, 1, -1, -1, 77, -1, -1, -1, 3]
// function solution(a) {
//         let i = 0;
//         let counter = 0;
//         let arrayLength = a.length
//         while (i < arrayLength) {
//             for (let i = 0; i < arrayLength; i++) {
//                 if (a[i] > a[i + 1+counter] && a[i]!==-1 && a[i+1+counter]!== -1) {
//                     let higherNumber = a[i];
//                     a[i] = a[i + 1+counter];
//                     a[i + 1+counter] = higherNumber;
//                     counter=0;
//                 } else if (a[i]===-1) {
//                 }
//                 else if(i+1+counter=== undefined) {
//                     counter = 0
//                 }
//                 else if (a[i] > a[i + 1+counter] && a[i]!==-1 && a[i+1+counter]===-1) {
//                     counter++
//                     i= i - 1
//                 }
//                 else {counter = 0}
//             }
//             i++
//         }
//     return console.log(a)
// }
// solution(a)

// The same as the one above o o
//                            O
// const solution = a => {
//     let filtered = a.filter(value => value !== -1)
//     let sorted = filtered.sort((a, b) => a - b)
//     return console.log(a.map(value => value === -1 ? -1 : sorted.shift()))
// }
// solution(a)

// function to take off braces and reverse content inside.
// const str = 'foo(bar((baz)))uuu(azi)blim';
// function solution2(inputString) {
//     let counter = 0;
//     (inputString.split('')).forEach(el => el === '(' ? counter++ : false);
//     for (let i = 0; i < counter; i++) {
//         let start = inputString.lastIndexOf('(')
//         let check = inputString.substring(start)
//         let stop = check.indexOf(')')+start
//         let toCut = ((inputString.split('')).splice(start, stop - start + 1)).join('')
//         let reversed = (((Array.from(toCut)).filter(el => el !== '(' && el !== ')')).reverse()).join('')
//         inputString = inputString.replace(toCut, reversed)
//     }
//         return console.log(inputString)
// }
// solution2(str)

const a = [0]
const b = [0]

function solution(a, b) {
    if (a.toString()===b.toString()){
        return console.log(true)
    } else {
        for (let i=0; i<a.length;i++) {
            for (let j = i+1;j<a.length;j++) {
                if (a[i]!==b[i]) {
                    let temp = a[i]
                    a[i] = a[j]
                    a[j] = temp
                    if (a.toString()===b.toString()){
                        return console.log(true)
                    }
                    a[j] = a[i]
                    a[i] = temp
                }
            }
        }
        return console.log(false)
    }
}
solution(a,b)