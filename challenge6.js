class LRUCache{
    arraycache;
    capacity;
    constructor(capacity){
        this.arraycache=[];
        this.capacity = capacity; 
    }

    get(key){
        const index=this.arraycache.findIndex(object => object.key === key);
        if(index===-1){return null;}
        const temp=this.arraycache[index];
        this.arraycache.splice(index,1);
        this.arraycache.push(temp);
        return temp.value;

    }
    put(key,value){
        if(this.arraycache.findIndex(hasSpecificKey(key))!==-1) return;
        if(this.arraycache.length>=this.capacity){
            this.arraycache.shift();
        }
        this.arraycache.push({key,value});


    }   


}

const hasSpecificKey= (key) => (object) => {
    if(object.key===key){
        return true;
    }else{
        return false;
    }

}
const cache = new LRUCache(2);
console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1)); 
console.log(cache.put(3, 3)); 
console.log(cache.get(3)); 
console.log(cache.get(2)); 