function bblsort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bblsort([64,34,25,12,22,11,90]));

/* time complexity:o(n^2)
(n-1) (n-2) (n-3).... 
=n(n-1)/2
=o(n^2) */