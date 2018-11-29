class HashTable {
    constructor() {
        this.table = []
    }
    put(key, value) {
        let position = this.loseloseHashCode(key);
        this.table[position] = value;
    }
    remove(key) {
        let position = this.loseloseHashCode(key);
        this.table[position] = undefined;
    }
    get(key) {
        let position = this.loseloseHashCode(key);
        return this.table[position];
    }
    loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
}