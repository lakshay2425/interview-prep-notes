let arr = [0, 3, 5, 2, 7, 9]
let arr2 = [10, 20]
let arr3 = []
// let arr4 = [4,NaN]

/* For real world scenarios, these can be implemented as well:
1. Handle nested array
2. Handle non number elements
*/

/* 
My learnings: 
1. We should use -Infinity to initialize largest and second largest variables instead of 0 because to handle negative numbers in the array.
*/

function calculateSecondLargest(arr) {
    if(arr.length < 2) return "Array should have at least 2 element"
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    
    if(secondLargest == -Infinity) return "Array should have different elements"
    return secondLargest;
}

console.log(calculateSecondLargest(arr))
console.log(calculateSecondLargest(arr2))
console.log(calculateSecondLargest(arr3))
console.log(calculateSecondLargest(arr4))