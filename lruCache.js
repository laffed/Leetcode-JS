class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0;
        this.head = null;
        this.tail = null;
        this.hashTable = {};
    }
    
    get(key) {
        if (this.hashTable[key]) {
            const {value, prev, next} = this.hashTable[key];
            if (prev) {
                prev.next = next;
            }
            if (next) {
                next.prev = prev || next.prev;
            }
            if (this.tail === this.hashTable[key]) {
                this.tail = prev || this.hashTable[key];
            }
            
            this.hashTable[key].prev = null;
            if (this.head !== this.hashTable[key]) {
                this.hashTable[key].next = this.head;
                this.head.prev = this.hashTable[key];
            }
            
            this.head = this.hashTable[key];
            
            return value;
        }
        
        return -1;
    }
    
    put(key, value) {
        if (this.hashTable[key]) {
            this.hashTable[key].value = value;
            this.get(key);
        } else {
            this.hashTable[key] = {
                key, 
                value, 
                prev: null,
                next: null
            }
            if (this.head) {
                this.head.prev = this.hashTable[key];
                this.hashTable[key].next = this.head;
            }
            
            this.head = this.hashTable[key];
            
            if (!this.tail) {
                this.tail = this.hashTable[key];
            }
            
            this.count += 1;
        }
        
        if (this.count > this.capacity) {
            let removeKey = this.tail.key;
            
            if (this.tail.prev) {
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
                this.hashTable[removeKey].prev = null;
            }
            
            delete this.hashTable[removeKey];
            
            this.count -= 1;
        }
    }
}
