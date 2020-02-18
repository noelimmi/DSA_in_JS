class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.length;
    }
}

const arr1 = new MyArray();
arr1.push(23);
console.log(arr1);