class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.replace(/[^a-zA-Z0-9]/g, '');

         newS = newS.split(" ").join("");
         console.log(newS)
        let newRevS= []
        for(let i=newS.length-1;i>=0;i--){
            if(this.isAlphanumeric(newS[i])) newRevS.push(newS[i])
            
        }
        return newRevS.join("").toLowerCase() === newS.toLowerCase()
    }
     isAlphanumeric(ch) {
            return /^[a-z0-9]$/i.test(ch);
    }

}
