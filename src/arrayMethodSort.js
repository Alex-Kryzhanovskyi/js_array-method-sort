'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const n = arr.length;

    const compareFunction1 =
      compareFunction ||
      function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        const aIsUpper = /^[A-Z]/.test(aStr);
        const bIsUpper = /^[A-Z]/.test(bStr);

        if (aIsUpper && !bIsUpper) {
          return -1;
        }

        if (!aIsUpper && bIsUpper) {
          return 1;
        }
        return aStr.localeCompare(bStr);
      };

    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (compareFunction1(arr[i], arr[i + 1]) > 0) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);

    return arr;
  };
}

module.exports = applyCustomSort;
