class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};
        for(let i=0;i<nums.length;i++){
                obj[nums[i]] = i;
        }

        for(let i=0;i<Object.keys(obj).length;i++){
            if(obj.hasOwnProperty(target-nums[i]) && obj[target-nums[i]] !== i) {
                return [i, obj[target-nums[i]]];
            }
        }



    }
}
