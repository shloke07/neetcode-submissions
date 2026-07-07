class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length===1){
            return [strs]
        }

        const sortedMap = new Map();
        const result = [];
        for(let i=0;i<strs.length;i++){
            let anagram = sortedMap.get(strs[i].split('').sort().join(''))
            if(anagram && anagram.length){
              console.log(anagram)
              console.log(i)
                anagram.push(strs[i])
                sortedMap.set(strs[i].split('').sort().join(''),anagram)
            }
            else{
                sortedMap.set(strs[i].split('').sort().join(''),[strs[i]])
            }
            
        }

        for(const ch of sortedMap.keys()){
          result.push(sortedMap.get(ch))
        }

        return result
    }
}
