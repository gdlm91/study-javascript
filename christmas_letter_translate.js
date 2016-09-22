/**
 * Represent a small bilingual lexicon as a Javascript object in the following fashion 
 * {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"} 
 * and use it to translate your Christmas cards from English into Swedish.
 */

(function () {
    var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
    
    window.jss_christmasLetterTranslate = christmasLetterTranslate;

    function christmasLetterTranslate(str) {
        var arrTranslation = translate(str.split(' '));
        return arrTranslation.join(' ');
    }

    function translate(arr) {
        var word = arr.shift();
        var translation = dictionary[word] || word;

        if(arr.length === 0) {
            return [translation];
        }

        return [translation].concat(translate(arr));
    }
})()