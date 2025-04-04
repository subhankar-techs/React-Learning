"use strict";
// find non repeating elements and frequency in an array with asynchonous callbacks
Object.defineProperty(exports, "__esModule", { value: true });
var arr = ["hi", "hello", "hi", "world", "hello", "hi", "subhankar", "php"];
function countFrequency(array, callback) {
    var frequencyCount = {};
    array.forEach(function (item) {
        frequencyCount[item] = (frequencyCount[item] || 0) + 1;
    });
    var nonRepeatingElements = [];
    array.forEach(function (item) {
        if (frequencyCount[item] === 1) {
            nonRepeatingElements.push(item);
        }
    });
    var frequencyArray = Object.keys(frequencyCount)
        .map(function (msg) { return ({ element: msg, frequency: frequencyCount[msg] }); });
    callback(frequencyArray, nonRepeatingElements);
}
countFrequency(arr, function (result, nonRepeating) {
    console.log("Frequency of each element:", result);
    console.log("Non-repeating elements:", nonRepeating);
});
