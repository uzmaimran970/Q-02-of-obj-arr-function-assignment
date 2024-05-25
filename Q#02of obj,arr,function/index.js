"use strict";
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string"i am a student of giaic"
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
for (let i = 0; i < scrambledArray.length; i++) {
    if (typeof scrambledArray[i] !== "string") {
        scrambledArray[i] = String(scrambledArray[i]);
    }
}
scrambledArray.splice(2, 3);
scrambledArray.unshift("i");
scrambledArray.splice(1, 0, "am", "a");
scrambledArray.pop();
scrambledArray.splice(5, 1);
const joinString = scrambledArray.join(' ');
console.log(joinString);
