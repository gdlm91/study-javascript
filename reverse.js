/**
 * Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj"
 */

(function () {
    window.jss_reverse = reverse;

    function reverse(str) {
        if(str.length == 0) {
            return '';
        }
        return str.slice(-1) + reverse(str.slice(0, -1));
    }
})()