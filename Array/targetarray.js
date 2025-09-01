var searchRange = function(nums, target) {
    function findFirst(nums, target) {
        let left = 0, right = nums.length - 1;
        let first = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                first = mid;
                right = mid - 1; // keep searching left side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }

    function findLast(nums, target) {
        let left = 0, right = nums.length - 1;
        let last = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                last = mid;
                left = mid + 1; // keep searching right side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    }

    return [findFirst(nums, target), findLast(nums, target)];
};

console.log(searchRange([5,7,7,8,8,10], 8));
