/**
 * Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
 */

(function () {
    window.jss_findLongestWord = findLongestWord;

    function findLongestWord(arrOfWords) {
        var longestWord = '';

        for (var i = 0, word; i < arrOfWords.length; i++) {
            word = arrOfWords[i];
            if(word.length > longestWord.length) {
                longestWord = word; 
            }
        }

        return longestWord;
    }
})()