class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for(let words of strs){
            const key = words.split("").sort().join("");
            if(!map[key]){
                map[key] = []
            }
            map[key].push(words)
            
        }
        return Object.values(map)
        
    }
}
