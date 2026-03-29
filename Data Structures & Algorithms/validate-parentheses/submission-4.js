class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
         let arr = s.split('')
         let stack = []
         for(let i=0;i<arr.length;i++){
            if(arr[i] === '(' || arr[i] === '{'|| arr[i] === '['){
                stack.push(arr[i]);
                continue;
            }

            let top = stack.pop();
            if(            (arr[i] === ')' && top !== '(') ||
            (arr[i] === '}' && top !== '{') ||
            (arr[i] === ']' && top !== '[')
            ){
                return false
            }
           
         }

         return stack.length === 0

    }
}
