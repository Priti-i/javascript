// Maximum and minimum element in array

function Minium(arr)
{
    let min=Infinity;
    let n=arr.length;
    for(let i=0;i<n;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
       
    }
 return min;
}
function Maximum(arr)
{
    let max=-Infinity;
    for( i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;

}
let arr=[12,3,4,1,6,9];

console.log(Minium(arr));
console.log(Maximum(arr));