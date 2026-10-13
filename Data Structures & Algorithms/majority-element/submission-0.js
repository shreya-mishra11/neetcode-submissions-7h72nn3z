class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map()
        for(let num of nums){
            map.set(num, (map.get(num) || 0)+1)
            if(map.get(num) > nums.length/2){
                return num
            }
        }
      
    }
}
