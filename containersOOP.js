/*
Inheritance exercises with containers ,boxes, items

*/
class Container{
    constructor(name){
        this.name = name
    }

    canFit(item){
        console.error("abstract function");
    }

    store(item){
        console.error("abstract function");        
    }

    retrieve(index){
        console.error("abstract function")
    }
}

class Item{
    constructor(name, size, category, createdAt){
        this.name = name
        this.size = size
        this.category = category
        this.createdAt = createdAt
    }

    getSize(){
        return this.size
    }
}

class ItemContainer extends Container{
    constructor(name){
        super(name)
        this.Items = []
    }

    canFit(item){
        return true
    }

    store(item){
        this.Items.push(item)
        return this.Items.length-1
    }

    retrieve(index){
        return this.Items[index]
    }


}

const itemContainer = new ItemContainer("testItemContainer")
let item1 = new Item("Item1", 10, "test", new Date())
console.log(itemContainer.canFit(item1))
const index = itemContainer.store(item1)
console.log(index)
const retrieve = itemContainer.retrieve(index)
console.log(retrieve.name)

class ItemBox extends ItemContainer{
    constructor(maxSize){
        super("ItemBox")
        this.maxSize = maxSize  
        this.usedSpace = 0   
    }

    canFit(item){
        
        if (this.maxSize - this.usedSpace >= item.size) return true
        return false
    }

    store(item){
        if(this.canFit(item)){
            console.log("store")
            this.usedSpace += item.size
            return super.store(item)
        }
    }
}

const box = new ItemBox(10)
item1 = new Item('Item 1', 5, 'test', new Date())
let item2 = new Item('Item 2', 3, 'test', new Date())
let item3 = new Item('Item 3', 3, 'test', new Date())

console.log(box.store(item1))
console.log(box.store(item2))
console.log(box.store(item3))

console.log(box.retrieve([1])) 


class NestedContainer extends Container{
    constructor(name, containers){
        super(name)
        this.containers = containers        
    }
    canFit(item){
        //array.some(f())
        let space = false
        let indexBox = 0
        while(!space && indexBox<this.containers.length){
            if(this.containers[indexBox].canFit(item)) space = true
            else indexBox++
        }
        return [space,indexBox]
    }

    store(item){
        let canF = this.canFit(item)
        if(canF[0])return [ canF[1], this.containers[canF[1]].store(item)]
        console.log("Error, not size available")
    }

    retrieve(index){
        console.log("aaaa")
        console.log(index)
        // console.log(this.containers[0].Items[1])
        return this.containers[index[0]].Items[index[1]]
    }
}

const boxes = [new ItemBox(10), new ItemBox(10)] 
const nestedContainer = new NestedContainer('NestedContainer', boxes)
item1 = new Item('Item 1', 5, 'test', new Date())
item2 = new Item('Item 2', 3, 'test', new Date())
item3 = new Item('Item 3', 3, 'test', new Date())
item4 = new Item('Item 4', 8, 'test', new Date())

nestedContainer.store(item1) 
console.log("nested")
let i1 = nestedContainer.store(item2)
console.log(i1) // [0, 1]
let i2 = nestedContainer.canFit(item3) // true 
i2 = nestedContainer.store(item3)
console.log(i2) // [1, 0]
const i4 = nestedContainer.canFit(item4) // false
console.log(nestedContainer[0])
console.log(nestedContainer.retrieve([0, 1]).name) // Item 2

