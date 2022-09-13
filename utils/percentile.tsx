export const percentile = (nums) => {
  nums.sort()
  return nums[Math.floor(nums.length * 0.9)]
}
