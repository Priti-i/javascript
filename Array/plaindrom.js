/* 
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.*/

 function isPalindrome(x) {
    let num=x;
    let rev=0;
    while(x>0){
        let digit=x%10;
         rev=(rev*10)+digit;
         x=Math.floor(x/10);
    }
    if(num==rev)
    {
        return true;
    }
    else{
        return false;
    }
    
};
console.log( isPalindrome(-121));