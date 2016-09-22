/**
 * Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. 
 * For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
 */

(function() {
    window.sum = sumArray;
    window.mult = multArray;

    function sumArray(arr) {
        if(arr.length == 1) {
            return arr[0];
        }
        return arr.shift() + sumArray(arr);
    }

    function multArray(arr) {
        if(arr.length == 1) {
            return arr[0];
        }
        return arr.shift() * multArray(arr);
    }

})();