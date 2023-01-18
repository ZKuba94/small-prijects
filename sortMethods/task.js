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

const a = [23, 43, 1, -1, -1, 77, -1, -1, -1, 3]
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
const solution = a => {
    let filtered = a.filter(value => value !== -1)
    let sorted = filtered.sort((a,b)=>a-b)
    return console.log(a.map(value => value === -1? -1: sorted.shift()))
}
solution(a)

const str = 'foo(bar)baz(blim)'
function solution2(inputString) {
    const start = inputString.indexOf('(')
    const end = inputString.indexOf(')')
    let short = inputString.substring(start+1,end)
    let switched = (Array.from(short).reverse()).join('')
    return inputString.includes('(')
        ? solution2(inputString.replace(short,switched).replace('(','').replace(')',''))
        : console.log(inputString.replace(short,switched).replace('(','').replace(')',''))
}
solution2(str)