function findMissingNumber(arr){
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]!==i+1)
            return i+1;
    }
   return -1;
}

console.log(findMissingNumber([1,2,3,4,6]))
