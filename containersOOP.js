function Item(name, size, category, createdAt) {
    Object.assign(this, { name, size, category, createdAt })
}

class Container {
    constructor(name) {
        this.name = name
    }
    canFit (item) {
        throw new Error("Abstract Method")
    }
    store (item) {
        throw new Error("Abstract Method")
    }
    retrieve (index) {
        throw new Error("Abstract Method")
    }
}

class ItemContainer extends Container{
    constructor (name) {
        super(name)
        this.arr = []
        this.size = 0
    }
    canFit (item) {
        return true
    }
    store (item) {
        this.arr.push(item)
        this.size += item.size
        return [(this.arr.length-1)]
    }
    retrieve (index) {
        return this.arr[index]
    }
    getSize() {
        return this.size
    }
    getArr() {
        return this.arr
    }
}

class ItemBox extends ItemContainer {
    constructor(capacity) {
        super("ItemBox")
        this.capacity = capacity
        this.usedSpace = 0
    }
    canFit (item) {
        return item.size <= (this.capacity - this.usedSpace)
    }
    store (item) {
        if (this.canFit(item)) {
            this.usedSpace += item.size
            return super.store(item)
        }
        else {
            return false
        }
    }
}

class NestedContainer extends Container {
    constructor (subcontainers) {
        super("nestedContainer")
        this.subcontainers = subcontainers
    }
    canFit (item) {
        for (let i=0; i<this.subcontainers.length; i++) {
            if(subcontainers[i].canFit()) {
                return true
            }
        }
        return false
    }
    store (item) {
        console.log(this.subcontainers[0])
        for (let i=0; i<this.subcontainers.length; i++) {
            if(this.subcontainers[i].canFit(item)) {
                this.subcontainers[i].store(item)
                let index = [i, subcontainers[i].retrieve(item)]
                return index
            }
        }
        return false
    }
    retrieve (index) {
        return this.subcontainers[index[0]].retrieve(index[1])
    }
}

const boxes = [new ItemBox(10), new ItemBox(10)]
const nestedContainer = new NestedContainer('NestedContainer', boxes)
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())
const item4 = new Item('Item 4', 8, 'test', new Date())
nestedContainer.store(item1)
const i1 = nestedContainer.store(item2)
console.log(i1) // [0, 1]
nestedContainer.canFit(item3) // true
const i2 = nestedContainer.store(item3)
console.log(i2) // [1, 0]
nestedContainer.canFit(item4) // false
console.log(nestedContainer.retrieve([0, 1]).name) // Item 2