class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}
        for(let i=0;i<strs.length;i++){
            let sortedStr = sortStr(strs[i])
            if(!obj.hasOwnProperty(sortedStr)){
                     obj[sortedStr] = [strs[i]]
            }else{
                obj[sortedStr].push(strs[i])
            }

        }
        return Object.values(obj)

    }
}

function sortStr(s){
    return s.split('').sort().join('')
}