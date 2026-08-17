class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let obj ={};
        for(let ele of s){
            obj[ele] = (obj[ele] || 0) +1
        }
        for(let ele of t){
            if (!obj[ele]) return false; 
            obj[ele]--;
        }
        return true
    }
}
