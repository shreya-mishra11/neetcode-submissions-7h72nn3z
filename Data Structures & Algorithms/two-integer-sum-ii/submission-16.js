class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let obj={}
        for(let i=0;i<numbers.length;i++){
            obj[numbers[i]] = i + 1;
        }

        for(let i=0;i<numbers.length;i++){
            const key = +Object.keys(obj)[i]
            
            if(Object.keys(obj).map(Number).includes(target - key) && obj[key] !== obj[target - key]){
                if (obj[key] < obj[target - key]) {
                return [obj[key], obj[target - key]]
                } 
                return [obj[target - key], obj[key]]
            }
           
        }
       return [-1,-1]
    }
}
