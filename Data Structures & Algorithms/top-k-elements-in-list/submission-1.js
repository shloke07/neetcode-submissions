class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        const nums_map = {};
        const freq_arr = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            nums_map[n] = (nums_map[n] || 0) + 1;
        }

        for (const n in nums_map) {
            freq_arr[nums_map[n]].push(Number(n))
        }

        const res = [];
        for (let i = freq_arr.length - 1; i > 0; i--) {
            for (const n of freq_arr[i]) {
                res.push(n);
                if (res.length == k) {
                    return res;
                }
            }
        }


    }

}