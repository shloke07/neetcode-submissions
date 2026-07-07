class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedMap = new Map();
        for(let i=0;i<strs.length;i++){
            let sorted_key =  strs[i].split('').sort().join('')
            // let anagram = sortedMap.get(sorted_key)
            if(sortedMap.get(sorted_key)){
                // anagram.push(strs[i])
                // sortedMap.set(sorted_key,anagram)
                sortedMap.get(sorted_key).push(strs[i])
            }
            else{
                sortedMap.set(sorted_key,[strs[i]])
            }
            
        }

        return Array.from(sortedMap.values())
    }
}
