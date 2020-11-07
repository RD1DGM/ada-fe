// HELPER FUNCTIONS

/**
 * @param {array} arr
 * @function => transforms a given array to an object with values
 * "id" used as it's property and "name" or "title" as it's value
 */
export const mapDataByID = (arr) => {
  const map = arr.reduce((acc, cur) => {
    return { ...acc, [cur.id]: cur.name || cur.title };
  }, {});
  return map;
};

/**
 * @param {string} str
 * @function => checks if the node's content body has "{variable}"
 */
export const hasVariable = (str) => str.includes("{") && str.includes("}");

/**
 * @param {string} str
 * @function => returns the "{variable}" from the given string
 */
export const getVariable = (str) =>
  str.slice(str.indexOf("{") + 1, str.indexOf("|"));

/**
 * @param {string} str
 * @function => return the fallback value from "{variable}" if the variable has no corresponding value
 */
export const getFallback = (str) =>
  str.slice(str.indexOf("|") + 1, str.indexOf("}"));

/**
 * @param {string} str
 * @param {string} prevSearchedInput
 * @function => returns the portion of the "str" using the prevSearchedInput's value
 */
export const textHighlighter = (str, prevSearchedInput) =>
  str.split(new RegExp(`(${prevSearchedInput})`, "gi"));

/**
 * @param {object} node
 * @param {array} arr
 * @function => checks if any of the title button was clicked after searching
 */
export const checkTitleClicked = (node, arr) => !node && arr.length;

/**
 * @param {object} node
 * @param {array} arr
 * @param {string} prevSearchedInput
 * @function => checks if there are results found after searching
 */
export const checkResultsFound = (node, arr, prevSearchedInput) =>
  (!node || node) && !arr.length && prevSearchedInput;
