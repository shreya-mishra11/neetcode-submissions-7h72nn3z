class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
           return strs.map(str => str.length + '#' + str).join('');


    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    const result = [];
    let i = 0;

    while (i < str.length) {
      // Find the streparator `#`
      let j = i;
      while (str[j] !== '#' && j < str.length) j++;
      const len = parseInt(str.slice(i, j)); // Get length
      result.push(str.slice(j + 1, j + 1 + len)); // Extract string
      i = j + 1 + len; // Move to next encoded string
    }

    return result;

    }
}
