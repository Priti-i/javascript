const SelectionSort=(arr)=>{
    let n=arr.length;
    for(let i=0;i<n;i++)
        {
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex])
            
                minIndex=j;
        }
             if(minIndex!=i)
{
    let temp=arr[i];
    arr[i]=arr[minIndex];
    arr[minIndex]=temp;
}
           
          }
          return arr;

}
console.log(SelectionSort([64,34,25,12,22,11,90]));