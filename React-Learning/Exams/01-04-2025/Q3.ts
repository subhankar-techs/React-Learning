// find non repeating elements and frequency in an array with asynchonous callbacks

var arr: string[] = ["hi", "hello", "hi", "world", "hello", "hi", "subhankar", "php"];

function countFrequency(
    array: string[],
    callback: (result: { element: string; frequency: number }[], nonRepeating: string[]) => void) {
    const frequencyCount: { [msg: string]: number } = {};

    array.forEach((item) => {
        frequencyCount[item] = (frequencyCount[item] || 0) + 1;
    });

    const nonRepeatingElements: string[] = [];
    array.forEach((item) => {
        if (frequencyCount[item] === 1) {
            nonRepeatingElements.push(item);
        }
    });

    const frequencyArray = Object.keys(frequencyCount)
        .map((msg) => ({ element: msg, frequency: frequencyCount[msg] }));
    callback(frequencyArray, nonRepeatingElements);
}

countFrequency(arr, (result, nonRepeating) => {
    console.log("Frequency of each element:", result);
    console.log("Non-repeating elements:", nonRepeating);
});

export { };