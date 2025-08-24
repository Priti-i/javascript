/* Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */

function smTwo(nums,target){
    let n=nums.length;
    const arr=[-1,-1];
    for(i=0;i<n;i++)
    {
for(j=i+1;j<n;j++)
{
    if(nums[i]+nums[j]==target)
    {
        arr[0]=i;
        arr[1]=j
      return arr;
        }
}
    }
    return arr;

}
console.log(smTwo([11,7,2,15],9));