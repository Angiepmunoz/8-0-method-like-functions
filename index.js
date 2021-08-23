/**
 * Appends an element or multiple elements to the end of an array. Do not use the push method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @param {*} element - an element of any kind
 * @returns {number} the new length of the array.
 */

function myPushFunction(array, element) {
  array[array.length] = element;
  return array.length;
}

// console.log(myPushFunction([1, 2, 3], 4));

/**
 * Removes the last element of the array and returns the removed element or undefined if the array is empty. Do not use the pop method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {*} the element that was removed.
 */
function myPopFunction(array) {
  if (array.length === 0) return;

  const removedElement = array[array.length - 1];
  array.length = array.length - 1;

  return removedElement;
}

// console.log(myPopFunction([]));

/**
 * Determine whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} fromIndex - index to begin at, if index is undefined then set to 0
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchElement, fromIndex = 0) {
  let isFound = false;

  if (fromIndex < 0) {
    fromIndex = array.length - Math.abs(fromIndex);
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      isFound = true;
    }
  }
  return isFound;
}

// console.log(myIncludesFunction([1, 2, 3, 4, 5], 2, -5));

/**
 * Return the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} fromIndex -
 * @returns {number} returns the index at with the searchElement is found or -1.
 */
function myIndexOfFunction(array, searchElement, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex = array.length - Math.abs(fromIndex);
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

// const array1 = ["fire", "water", "earth", "air"];
// console.log(myIndexOfFunction(array1, "air", -2));

// const array2 = [1, 2, 3, 4, 5];
// console.log(myIndexOfFunction(array2, 2, -2));

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, startIdx = 0, endIdx = array.length) {
  //create new array
  const slicedArr = [];
  //create starting index for sliceArr
  let slicedIndex = 0;

  if (startIdx < 0) {
    startIdx = array.length - Math.abs(startIdx);
  }

  if (endIdx > array.length) {
    endIdx = array.length;
  }

  if (endIdx < 0) {
    endIdx = array.length - Math.abs(endIdx);
    //iterate through array until array.length subtract by absolute value of end index
    //[1,2,3,4,5] length is 5
    //endIdx is negative so substract length by absolute value of end idx
    for (let i = startIdx; i < endIdx /*- 1*/; i++) {
      //push current element
      // console.log(array[i]);
      slicedArr[slicedIndex] = array[i];
      slicedIndex++;
    }
    return slicedArr;
  }

  //iterate through array
  for (let i = startIdx; i <= endIdx - 1; i++) {
    //push current element
    slicedArr[slicedIndex] = array[i];
    //increment slicedIndex
    slicedIndex++;
  }
  return slicedArr;
}

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction(array, seperator = ",") {
  let resultedJoin = "";

  //iterate through array
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      resultedJoin += array[i];
      continue;
    }
    //concatenate current value with separator
    resultedJoin += array[i] + seperator;
  }

  return resultedJoin;
}

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first. Do not use the reverse method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns the array with the elements reversed.
 */
function myReverseFunction(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    //use a temp variable to accomplish this goal
    let temp = array[i]; // temp =
    let currentEndIdx = array.length - 1 - i;

    array[i] = array[currentEndIdx];
    array[currentEndIdx] = temp;
  }

  return array;
}

/**
 * Returns an array with one or more elements added to the front of the array followed by the original elements. Do not use the unshift method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction(array, ...newElements) {
  //re-index everything in array 1 position to the right

  //if the arguments length is 1 for new elements
  if (newElements.length === 1) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (i === 0) {
        array[i + 1] = array[i];
        array[0] = newElements[0];
        continue;
      }
      array[i + 1] = array[i]; // array[5] = 5
    }
    return array.length;
  } else {
    //re-index everything to the right based on number of elements (later may need to reindex based on number of elements)
    // [1,2,3,4,5] - starting array , [6,7,8] - new elements to add to front

    //we have an expected length already which is 8

    //[undef,undef,undef,1,2,3,4,5]
    oldArrIndex = array.length - 1;

    for (let i = array.length + newElements.length - 1; i >= 0; i--) {
      if (oldArrIndex < 0) {
        array[i] = newElements[i];
        continue;
      }
      array[i] = array[oldArrIndex];
      oldArrIndex--;
    }
    return array.length;
  }
}

const numArr = [1, 2, 3, 4, 5];
console.log(myUnshiftFunction(numArr, 6, 7, 8));
// expect(numArr).toStrictEqual([6, 7, 8, 1, 2, 3, 4, 5]);

// const array = ["module", "one", "is", "finally", "over"];
// const element = "yas";

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
