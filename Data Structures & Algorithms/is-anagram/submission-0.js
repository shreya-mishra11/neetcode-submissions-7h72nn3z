class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    
    isAnagram(s, t) {
        let obj = {};
        let tobj = {}
        let count = 1;
        
         for(let i=0;i<s.length;i++){
            if(Object.keys(obj).includes(s[i])){
                obj[s[i]] = obj[s[i]]+1
            }
            else{
                    obj[s[i]] = 1

            }
            
         }

          for(let i=0;i<t.length;i++){
            if(Object.keys(tobj).includes(t[i])){
                tobj[t[i]] = tobj[t[i]]+1
            }
            else{
                    tobj[t[i]] = 1

            }
            
         }

         return sortObj(obj) === sortObj(tobj)
    }


}

function sortObj(obj) {
  return JSON.stringify(
    Object.keys(obj)
      .sort()
      .reduce((acc, key) => { acc[key] = obj[key]; return acc; }, {})
  );
}