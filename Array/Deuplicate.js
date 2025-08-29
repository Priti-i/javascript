function Duplicate(arr){
    arr.sort((a,b)=>a-b);
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==arr[i+1])
        {
            return true;
        }
    }
    return false;
}
console.log(Duplicate([1,2,3,4]));
