class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}; // value -> index
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (complement in map) {
                return [map[complement], i];
            }
            map[nums[i]] = i;
        }
        return [];
    }
}