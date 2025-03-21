function reverseString(str){
    let reversestring ="";
    for(let i=0; i <= str.length-1 ;i++){
        reversestring=str[i]+reversestring;
    }
    return reversestring;
}

console.log(reverseString("hello"));


