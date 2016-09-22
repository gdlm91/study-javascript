/**
 * Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
 */

(function() {
    window.jss_filterLongWords = filterLongWords;

    function filterLongWords(arrOfWords, minLength) {
        var longWords = [];

        for (var i = 0; i < arrOfWords.length; i++) {
            var word = arrOfWords[i];

            if(word.length > minLength) {
                longWords.push(word);
            }
        }

        return longWords;
    }
})()