//String Manipulation Functions:
/*
//Reverse a String: Write a function that reverses a given string.
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('olamilekan'));
*/
//Count Characters: Create a function that counts the number of characters in a string.
/*
function count(str) {
    return str.length;
}
let str = 'olamilekan';
console.log(count(str)); */

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
/*
function capitalWords (sentence){
    let word = sentence.split('');
    for (let i = 0; i < capitalWords.length; i++){
        word[i]= word[i][0].toUpperCase()+
        word[i].substring(1);
    }
    return word.join('');
}
console.log(capitalWords('olamilekan')); */

//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
/*
function findMax(arr){
    return Math.max(...arr);
}
function findMin(arr){
    return Math.min(...arr);
}
let arrNum = [6, 8, 9, 5, 9];
console.log(findMax(arrNum));
console.log(findMin(arrNum)); */


//Sum of Array: Create a function that calculates the sum of all elements in an array.
/*
 let myarr = [6, 8, 9, 5, 9];
 function addArry(myarr){
    let sum = 0;
   for (let i = 0; i < myarr.length; i++){
    sum += myarr[i];
   }
   return sum;

 }
 console.log(addArry(myarr)); */
/*
//Filter Array: Implement a function that filters out elements from an array based on a given condition.
 function filterArray(arr, condition){
    return arr.filter(condition);
 }
 let arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
 const filteredNumbers = filterArray(arrnum, (num)=> num > 5);
 console.log('filtered numbers: ' + filteredNumbers);
*/

//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.
/*
function calculateFac (num){
    if (num === 0){
        return 1;
    }else {
        return num * calculateFac(num - 1);
    }
}
console.log(calculateFac(5)); */

//Prime Number Check: Create a function to check if a number is prime or not.
/*
function isNotPrime (num){
    if (num <= 1){
        return true;
    }
    for (i = 2; i <= .sqrt(num); i++){
        if (num % i === 0){
            return true;
    }
}
return false;
}
let number = 7;
if (isNotPrime(number)){
    console.log(number + 'number is not prime.');
} else {
    console.log(number + 'is prime number');
}; */
//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
 
function generateFibonacciSequence(numTerms){
    let fibArray = [0, 1];
    for (let i = 2; i <= numTerms; i++){
        let nextTerm = fibArray[i - 1] + fibArray[i - 2];
        fibArray.push(nextTerm);
}
return fibArray;
}
console.log(generateFibonacciSequence(10)); 