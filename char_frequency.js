/**
 * Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
 * Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
 */

(function() {
    window.jss_charFreq = charFreq;

    function charFreq(str) {
        var freqs = {};

        for (var i = 0, char; i < str.length; i++) {
            char = str.charAt(i);
            
            if(freqs[char]) {
                freqs[char] += 1;
            } else{
                freqs[char] = 1;
            }
        }

        return freqs;
    }
})()