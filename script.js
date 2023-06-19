// write your code here
	function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  var n = S.length;
  var closestSum = Infinity;

  // Iterate over the array from left to right
  for (var i = 0; i < n - 2; i++) {
    var left = i + 1;
    var right = n - 1;

    while (left < right) {
      var sum = S[i] + S[left] + S[right];

      // Check if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Move the pointers based on the sum
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

// Example usage
var S = [-1, 2, 1, -4];
var target = 1;
var closestSum = threeSum(S, target);
console.log(closestSum);  // Output: 2
module.exports = threeSum;
