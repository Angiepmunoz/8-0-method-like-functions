/**
 * Appends an element or multiple elements to the end of an array. Do not use the push method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the new length of the array.
 */

function myPushFunction(array) {
  for (let i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }
  return array.length;
}

/**
 * Removes the last element of the array and returns the removed element or undefined if the array is empty. Do not use the pop method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the new length of the array .
 */
function myPopFunction(array) {
  let removed = array[array.length - 1];
  array.length ? (array.length -= 1) : (array.length -= 0);
  return removed;
}

/**
 * Determine whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchElement, extra = 0) {
  if (extra < 0) {
    extra += array.length;
  }
  for (let i = extra; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }
  return false;
}

/**
 * Return the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {number} returns the index at with the searchElement is found or -1.
 */
function myIndexOfFunction(array, searchElement, extra = 0) {
  if (extra < 0) {
    extra += array.length;
  }
  for (let i = extra; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, startIdx = 0, endIdx = array.length) {
  //default starting and ending index, if they didn't passone in
  //negative index clause for startIdx
  if (startIdx < 0) {
    startIdx += array.length;
  }
  //negative index clause for endId
  if (endIdx < 0) {
    endIdx += array.length;
  }
  //endInx Fix clause
  if (endIdx > array.length) {
    endIdx = array.length;
  }
  //declade variable to accumulate to, set to empty array
  let newArr = [];
  //create loop to iterate through our array
  for (let i = startIdx; i < endIdx; i++) {
    //add the element to our new arr
    newArr[newArr.length] = array[i];
  }
  return newArr;
}

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction(array, separator = ',') {
  let newString = '';
  for (let i = 0; i < array.length; i++) {
    newString += array[i];
    if (i !== array.length - 1) {
      newString += separator;
    }
  }
  return newString;
}

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first. Do not use the reverse method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns the array with the elements reversed.
 */
function myReverseFunction(array) {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i],
    ];
  }
  return array;
}

/**
 * Returns an array with one or more elements added to the front of the array followed by the original elements. Do not use the unshift method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction(array) {
  for (let j = arguments.length - 1; j >= 1; j--) {
    for (let i = array.length - 1; i >= -1; i--) {
      i < 0 ? (array[0] = arguments[j]) : (array[i + 1] = array[i]);
    }
  }
  return array.length;
}

module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction,
};
