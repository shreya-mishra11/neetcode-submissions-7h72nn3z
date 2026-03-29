class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let ans = [];
        for(let i=0;i<n;i++){
            let p =1;
            for(let j=0;j<n;j++){
                if(j != i){
                   p = p * nums[j] 
            
                }

            }
                   ans.push(p)
            
        }
        console.log(ans)
        return ans
    }
}
