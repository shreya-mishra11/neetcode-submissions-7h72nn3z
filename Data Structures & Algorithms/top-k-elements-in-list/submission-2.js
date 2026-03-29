class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj= {};
        for(let i=0;i<nums.length;i++){
            if(obj.hasOwnProperty(nums[i])){
                obj[nums[i]] += 1
            }else{
                obj[nums[i]] = 1
            }
        }

        console.log(obj)
        // pair
        let freqArr = [];
        for(let key in obj){
            freqArr.push([Number(key),obj[key]])
        }

        // sort
        for(let i=0;i<freqArr.length;i++){
            for(let j=i+1;j<freqArr.length;j++){
                if(freqArr[j][1] > freqArr[i][1]){
                    // swap
                    let temp = freqArr[i];
                    freqArr[i] = freqArr[j];
                    freqArr[j] = temp;
                }
            }
        }

        // top k elements
        let result = [];
        for(let i=0;i<k;i++){
            result.push(freqArr[i][0])
        }
        return result
    }
}

