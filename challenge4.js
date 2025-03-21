function firstNonRepeatingChar(str){
    let nonRepeating ="";
    for(let i=0;i<=str.length-1;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            nonRepeating=str[i];
            return nonRepeating;
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("racecar"));
