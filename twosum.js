var twoSum = function(nums, target) {
    const pairIdx = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIdx) {
            return [pairIdx[target - num],i];
        }
        pairIdx[num] = i;
    }
};
const arr = [3,2,4,7];
console.log("To sum indices...",twoSum(arr,9));

// 2nd approach
var twoSumIndices = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};
console.log("To sum indices========>",twoSumIndices(arr,6));
