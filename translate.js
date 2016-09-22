/**
 * Write a function translate() that will translate a text into "rövarspråket". That is, 
 * double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") 
 * should return the string "tothohisos isos fofunon".
 */

(function () {
    var separator = 'o',
        ignore = ['a', 'e', 'i', 'o', 'u', ' ']
        newString = [];

    window.translate = translate;

    function translate(str) {
        newString = [];

        for(var i = 0, strLength = str.length, tmpChar; i < strLength; i++) {
            tmpChar = str.charAt(i);
            if(ignore.indexOf(tmpChar) < 0) {
                newString.push(tmpChar);
                newString.push(separator);
                newString.push(tmpChar);
            } else {
                newString.push(tmpChar);
            }
        }

        newString = newString.join('');

        console.log(newString);
    }

})()