class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const set = new Set(nums);
       let longest = 0;
       for(const num of set){
        if(!set.has(num-1)){
            let currentNum = num;
            let streak = 1;
            while(set.has(currentNum + 1)){
                currentNum++;
                streak++
            }
            longest = Math.max(longest,streak);

        }
       }
       return longest
    }
}
