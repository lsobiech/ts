"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "as-number");
const combinedNames = combine("Max", "Anna", "as-text");
console.log(" combinedAges", combinedAges);
console.log(" combinedNames", combinedNames);
