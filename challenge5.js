function deepEqual(obj1,obj2){

    const firstobjectkey = Object.keys(obj1);
    const secondobjectkey = Object.keys(obj2);
    if(firstobjectkey.length !== secondobjectkey.length) return false;
    for (var key of firstobjectkey){
        const value1 = obj1[key];
        const value2 = obj2[key];
        
        const isObjects = isObject(value1) && isObject(value2);

        if (isObjects) {
            if (!deepEqual(value1, value2)) return false;
          } else if (value1 !== value2) {
            return false;   
          }
          
    }
         return true;


}
    const isObject = (object)=>{
        return object != null && typeof object === "object";

    };
console.log(deepEqual({a:1,b:{c:2}},{a:1,b:{c:2}}));
console.log(deepEqual({a:1,b:{c:2}},{a:1,b:{c:3}}));