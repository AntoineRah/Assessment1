function countVowels(str){
    let vowelCounter=0;
    let regex=/^[aeiouAEIOU]$/;
    for(let i=0; i<=str.length-1;i++){
        if(regex.test(str[i])){
         vowelCounter++;
        }
    }
    return vowelCounter;
}

console.log(countVowels("tgf"));