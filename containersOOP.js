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

class Container{
	constructor(name){
		this.name = name
	}
	canFit(item){
		throw new Error('Abstract method')
	}
	store(item){
		throw new Error('Abstract method')
	}
	retrieve(index){
		throw new Error('Abstract method')
	}
}

class ItemContainer extends Container{
	constructor(name){
		super(name)
		this.elements = []
	}
	canFit(item){
		return true
	}
	store(item){
		this.elements.push(item)
		return this.elements.length - 1
	}
	retrieve(index){
		return this.elements[index]
	}
}

class ItemBox extends ItemContainer{
	constructor(capacity){
		super("ItemBox")
		this.capacity = capacity
		this.usedCapacity = 0
	}
	canFit(item){
		return item.size <= (this.capacity - this.usedCapacity)
	}
	store(item){
		if(this.canFit(item)){
			this.usedCapacity += item.size
			return super.store(item)
		}
	}
	retrieve(index){
		return this.elements[index]
	}
}

class NestedContainer extends Container{
	constructor(name, subcontainers){
		super(name)
		this.subcontainers = subcontainers
	}
	canFit(item){
		return this.subcontainers.some(x => x.canFit(item))
	}
	store(item){
		for(let i = 0; i<this.subcontainers.length; i++){
			if(this.subcontainers[i].canFit(item)){
				this.subcontainers[i].store(item)
			}
		}
	}
	retrieve(index){
		throw new Error('Abstract method')
	}
}

const boxes = [new ItemBox(10), new ItemBox(10)]
const nestedContainer = new NestedContainer('NestedContainer', boxes)
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())
const item4 = new Item('Item 4', 18, 'test', new Date())

console.log(nestedContainer.canFit(item4))


nestedContainer.store(item1)
const i1 = nestedContainer.store(item2)
console.log(i1) // [0, 1]
nestedContainer.canFit(item3) // true
const i2 = nestedContainer.store(item3)
console.log(i2) // [1, 0]

/*
const itemContainer = new ItemContainer('Test Container')
const item1 = new Item('Item1', 10, 'test', new Date())

itemContainer.canFit(item1) // true
const index = itemContainer.store(item1)
console.log(index) // [0]

const retrieved = itemContainer.retrieve(index)
console.log(retrieved.name) // Item1
*/

/*
const box = new ItemBox(10)
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())

box.store(item1)
box.store(item2)
box.canFit(item3) // false
console.log(box.retrieve([1]).name) // Item 2
*/
