import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
let check4Sum = (nums, target) => {
  const ans = [];
  const len = nums.length;
  if (nums.length < 4) return ans;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target)
      continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          right--;
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return ans;
};

let nums = [1, 0, -1, 0, -2, 2],
  target = 0;
let result = check4Sum(nums, target);
console.log(result);
