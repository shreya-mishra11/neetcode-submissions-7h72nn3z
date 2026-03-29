class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        let count = 1;
        for(let i=0;i<nums.length;i++){
            if(Object.keys(obj).map(Number).includes(nums[i])){
                count++
            }
            obj[nums[i]] = count;
        }
        console.log(Object.values(obj).map(Number))
        for(let i=0 ; i< Object.values(obj).length; i++) {
            if(Object.values(obj)[i]>1){
            return true}
        }
        return false
        
    }
}
