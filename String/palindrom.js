// its first way but it take more space inside memory
// let str1="iti";
// let reverse="";
// for(let i=str1.length-1;i>=0;i--)
// {
//     reverse+=str1.charAt(i);
// }
// if(str1===reverse)
// {
//     console.log("palindrom");
// }
// else{
//     console.log("not palindrom");
// }

// second way its take les space inside memory (optimization)
let str2="itii";
let i=0,j=str2.length-1;
let isPlaindrom=true;
while(i<j)
{
    if(str2.charAt(i)!==str2.charAt(j))
    {
 isPlaindrom=false;
 break;
    }
    i++;
    j--;
}
if(isPlaindrom)
    console.log("palindrom");
else console.log("not palindrom");