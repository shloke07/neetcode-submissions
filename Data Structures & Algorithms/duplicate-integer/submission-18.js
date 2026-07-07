class Solution {

    hasDuplicate(nums) {
        var cache = {};

        let similar = false;

        
        for (let i = 0; i < nums.length; i++) {
            if (cache[nums[i]] && cache[nums[i]]>=1) {
                similar = true;
                console.log('Similar found', similar);
                return similar; 
            }
            else{
                cache[nums[i]] = 1;
            }
        }
        
        console.log('Similar not found', similar);
        return similar;
    }
}
