// OOP classes

class Container {
    constructor(name) {
        this.name = name
    }

    function (item) {
        throw new Error('Abstract method')
    }

    function (item) {
        throw new Error('Abstract method')
    }

    function (index) {
        throw new Error('Abstract method')
    }

}

class ItemContainer extends Container {
    constructor(name) {
        super(name)
        this.items = []
    }

    canFit() {
        return true
    }

    store(item) {
        this.items.push(item)
    }

    retrieve(index) {
        return this.items[index]
    }
}
class Item {
    constructor(name, size, category, createdat) {
        this.name = name
        this.size = size
        this.category = category
        this.createdat = createdat
    }

    getsize() {
        return this.size
    }
}

const itemContainer = new ItemContainer('Test Container')
const item1 = new Item('Item1', 10, 'test', new Date())
itemContainer.canFit(item1) // true
const index = itemContainer.store(item1)
console.log(index) // [0]
const retrieved = itemContainer.retrieve(0)
console.log(retrieved.name)

class ItemBox extends ItemContainer {
    constructor(capacity) {
        super('Itembox')
        this.capacity = capacity
        this.sumatotal = 0
    }

    store(item) {
    
        if (this.canFit(item)) {
            this.sumatotal += item.getsize
            return super.store(item)
        } else
            throw new Error('Item supera capacidad maxima')
    }

    canFit(item) {
        
        return item.getsize()<=(this.capacity-this.usedspace)
    }

    retrieve(index){
        super.retrieve(index)
    }
}

const box = new ItemBox(10)
const itm1 = new Item('Item 1', 5, 'test', new Date())
const itm2 = new Item('Item 2', 3, 'test', new Date())
const itm3 = new Item('Item 3', 3, 'test', new Date())
box.store(itm1)
box.store(itm2)
box.canFit(itm3) // false
console.log(box.retrieve([1]).name) // Item 2


