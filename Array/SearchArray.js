/* Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1  */


function search(nums,target){
    let n=nums.length;
 let arr=-1;
    for( i=0;i<n;i++)
    {
        if(nums[i]==target)
        {
           arr=i;
           return arr;
        }
    }
    return arr;
}

console.log(search([4,5,6,7,0,1,2],0))