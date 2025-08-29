function Distribution(arr,n)
{
    arr.sort((a,b)=>a-b);
    return arr[n-1]-arr[0];
}

console.log(Distribution([3,4,1,9,56,7,9,12],5));