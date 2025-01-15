class LRUCache {
    constructor(size) {
        this.capacity = size;
        this.cache = new Map();
    }
    
    // add or update a key-value pair
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        } else if(this.cache.size === this.capacity) {
            // remove the least recently used item (first item in map)
            const leastCacheKey = this.cache.keys().next().value;
            this.cache.delete(leastCacheKey);
            console.log("removed least recently useed :", leastCacheKey);
        }
        this.cache.set(key, value);
    }
    
    get(key) {
        if(!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    
    print() {
        console.log("cache content:");
        for(const [key, value] of this.cache) {
            console.log(`key: ${key} value : ${value}`);
        }
    }
}

const cache = new LRUCache(3);
cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
cache.put(4, "D"); // Removes 1 (Least Recently Used)
cache.get(3); // Access key 3 (makes it most recently used)
cache.put(4, "F"); // Updates value for key 3
cache.print();
