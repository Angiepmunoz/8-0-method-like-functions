/**
 * Appends an element or multiple elements to the end of an array. Do not use the push method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the new length of the array.
 */

function myPushFunction(arr) {
  let count = 0
  for (let item of arr){//substiture for .length
    count++
    //count is currently a running length counter for the array
  }
  for (let arg of arguments){
    if (arg === arr){//to ignore the first argument with the array

    }else{//add the argument at the current length and increase length count
      arr[count] = arg
      count++
    }
  }
  return count
}

/**
 * Removes the last element of the array and returns the removed element or undefined if the array is empty. Do not use the pop method.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the element that was removed
 */
function myPopFunction(arr) {
  if (!arr.length){//check if there are values
    return undefined
  }
  let len = 0
  for (let item of arr){//length
    len++
  }
  let result = arr[len-1] //track last item
  arr.length = arr.length -1 //remove last index of arr
  return result
}

/**
 * Determine whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchElement, start = 0) {
  let flag = false
  if (start< 0 ){ //check for negative start, and adjust accordingly
    start = array.length + start
  }
  for (let i=start ;i <  array.length; i++){
    if (array[i] === searchElement){//trigger flag if item found, could also just return here as well to break loop
      flag = true
    }
  }
  return flag
}

/**
 * Return the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {number} returns the index at with the searchElement is found or -1.
 */
function myIndexOfFunction(array, searchElement, start =0) {
  let result = -1
  if (start < 0 ){//same as above
    start = array.length + start
  }
  for (let i = start ;i <  array.length; i++){
    if (array[i] === searchElement){
      return i
    }
  }
  return result
}

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, start=0, end = array.length) {
  let newArr = []
  if (start < 0 ){//adjustments for start
    start = array.length + start
  }
  if (end < 0 ){//adjustments for end
    end = array.length + end
  }
  if (end > array.length){//check if end is too large
    end = array.length
  }
  for (let i = start; i < end; i++){//adding to new array
    myPushFunction(newArr, array[i])
  }
  return newArr
}

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction(array, seperator = ',') {
  if (!array.length){//empty array case
    return ''
  }
  let string = `${array[0]}`
  for (let i = 1; i< array.length; i++){//add to string
    string += seperator + array[i]
  }
  return string
}

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first. Do not use the reverse method.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns the array with the elements reversed.
 */
function myReverseFunction(array) {
  // newArr = []
  // for (let i =array.length -1; i >=0; i--){
  //   myPushFunction(newArr, array[i])
  // }
  // for (let i =0; i< newArr.length; i++){
  //   array[i] = newArr[i]
  // }
  newArr = mySliceFunction(array)
  for (let i =newArr.length-1; i >= 0; i--){//use slice copy to mutate original
    j = array.length-1 -i
    array[j] = newArr[i]
  }
  return array
}

/**
 * Returns an array with one or more elements added to the front of the array followed by the original elements. Do not use the unshift method.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
function myUnshiftFunction(array) {
  newArr = []
  for (let i = 1; i < arguments.length; i++){//adding arguements first to new array
    myPushFunction(newArr, arguments[i])
  }
  for (let i = 0; i < array.length; i++){//add the array elementst to new array
    myPushFunction(newArr, array[i])
  }
  for (let i = 0; i < newArr.length; i++){//reassign orignal array
    array[i] = newArr[i]
  }
  return array.length
}



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
