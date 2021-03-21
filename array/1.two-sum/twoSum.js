var twoSum = function (nums, target) {
  let start = nums[0];
  let cursor = 1;
  for (let i = cursor, len = nums.length; i < len; i++) {
    if (start + nums[i] === target) {
      return [cursor - 1, i];
    }
    if (i === len - 1) {
      start = nums[cursor];
      i = cursor++;
    }
  }
};

// (nums = [3, 2, 4]), (target = 6);
(nums = [2, 7, 11, 15]), (target = 9);
console.log(twoSum(nums, target));
