class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * 
     * [1,2,3,3]
     */
    hasDuplicate(nums) {
        const obj = {};
        for(let ele of nums){
            obj[ele] = ([obj[ele]] || 0)+1
            if (obj[ele] > 1) return true;

        }
        return false;
    }
}
