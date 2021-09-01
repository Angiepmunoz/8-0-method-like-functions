/**
 * Appends an element or multiple elements to the end of an array. Do not use the push method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @param {*} newElement - the element that will be added to the end of the array
 * @returns {number} the new length of the array.
 */

function myPushFunction(array, newElement) {
  array[array.length] = newElement
  console.log(array);
  return array.length;
}
// console.log(myPushFunction(["module", "one", "is", "finally", "over"], "yas"))

/**
 * Removes the last element of the array and returns the removed element or undefined if the array is empty. Do not use the pop method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {*} the removed element of the array.
 */
function myPopFunction(array) {
  if (array.length === 0) {
    return undefined;
  }
  let lastElement = array[array.length -1];
  array.splice(-1);
  return lastElement;
}
// myPopFunction(["fire", "water", "earth", "air"]);

/**
 * Determine whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchElement) {
  if (array.indexOf(searchElement) !== -1) {
    return true;
  } else {
    return false;
  }
}
// console.log(myIncludesFunction(["fire", "water", "earth", "air"], "earth"));

/**
 * Return the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {number} returns the index at with the searchElement is found or -1.
 */
function myIndexOfFunction(array, searchElement) {
  // iterate over the array to find where `searchElement` is/if it exists
  if (!array.includes(searchElement)) {
    return -1;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      // return index position only
      return i;
    } 
  }
}
// console.log(myIndexOfFunction(["fire", "water", "earth", "air"], "love")) // -1
// console.log(myIndexOfFunction(["fire", "water", "earth", "air"], "earth")); // 2

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, startIdx = 0, endIdx = array.length) {  
  let newArray = [];
  // array.forEach(element => newArray.push(element)); // makes a copy of original array

  // guard clause - if no `startIdx` or `endIdx`, return the array
  // if (!startIdx || !endIdx) {
  //   return newArray;
  // }
  
  // iterate through array for index positions
  // the loop will check each index all the way until array.length is the last one
  for (let i = startIdx; i < endIdx; i++) {
    let container = array[i];
      newArray.push(container);
    }
    return newArray;
  }
  // console.log("next-array", container); // test
  // console.log("sup", newArray); // sup [ 'fire', 'water', 'earth', 'air' ]
// }
// console.log(mySliceFunction(["fire", "water", "earth", "air"], 2, 3)) // ["earth"];
// console.log(mySliceFunction([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4];
// console.log(mySliceFunction([1, 2, [3, 4, 5]], 1, 2)) // [2]

  // if startIdx is undefined, start at 0; if 
  // if (startIdx === undefined) {
  //   startIdx = 0;
  // }
  // if (startIdx > endIdx) {
  //   return []; // empty array
  // }


    // if (array[i] === startIdx) {
      // removes first element from an array
      // array.shift();
          // if (array[i] === endIdx) {
    //   // removes last element from an array
    //   array.pop();
    // }

// references:
// @forEach - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction(array, separator) {
  let joined = ""; // string

  for (let i = 0; i < array.length; i++) {
    joined += array[i];
    if (i !== array.length -1 && separator === undefined) {
      joined += ",";
    }
    if (i !== array.length -1 && separator) {
      joined += separator;
    }
  }
  return joined;
}
// console.log(myJoinFunction(["I've", "got", "to", "celebrate", "you", "baby"])); // "I've,got,to,celebrate,you,baby";

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first. Do not use the reverse method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns the array with the elements reversed.
 */
function myReverseFunction(array) {
  let reversed = []
  // this reverses the words in the array
  for (let i = array.length -1; i >= 0; i--) {
    reversed.push(array[i]); // [ 'over', 'finally', 'is', 'one', 'module' ]
  }
  // this uses the reversed array, but needs to mutate the original array
  // reassigning the index of reversed array, and index of original array
  for (let i = 0; i < reversed.length; i++) {
    array[i] = reversed[i]; // mutates here
  }
  // console.log(array)
  return array;
}
// console.log(myReverseFunction(["module", "one", "is", "finally", "over"]))


// // this works, but I don't understand it:
// function myReverseFunction(array) {
//   for (let i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
//     let el = array[i];
//     array[i] = array[array.length -1 -i];
//     array[array.length -1 -i] = el;
//   }
//   return array;
// }


/**
 * Returns an array with one or more elements added to the front of the array followed by the original elements. Do not use the unshift method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction(array, ...newElement) {
  array.reverse();
  newElement.reverse();
  array.push(...newElement);
  array.reverse();
  return array.length;
}
// console.log(myUnshiftFunction(["module", "one", "is", "finally", "over"], "yas"));
// console.log(myUnshiftFunction([1, 2, 3, 4, 5], 6, 7, 8)); // [6, 7, 8, 1, 2, 3, 4, 5]



module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction
};
