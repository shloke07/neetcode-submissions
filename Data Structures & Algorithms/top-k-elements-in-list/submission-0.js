class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let nums_map = {}           //create map to track count of each number
        for(const n of nums){
            if(nums_map[n]){            //if number exists in map, increment the count by 1    
                nums_map[n] = nums_map[n] + 1
            }
            else{
                nums_map[n] = 1         //if number doesnt exist in map, set it with initial count 1
            }
        }

        let distinct_nums = Object.keys(nums_map);
        distinct_nums.sort((n,m) => { return nums_map[m]-nums_map[n]})
        distinct_nums = distinct_nums.slice(0,k)
        return distinct_nums;

         
    }
}