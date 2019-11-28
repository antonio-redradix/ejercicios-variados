/**
 * This exercise is an implementation of classes, subclasses and the heritage.
 * 
 * A container is a class with several undefined methods
 * 
 * An Item is a class with a defined size
 * 
 * An ItemContainer is a class which allows the creation of objects where you can store (returning the index
 * where the item has been stored) items and search for stored items (retrieve). Its capacity is undefined.
 * 
 * An ItemBox is a container with a defined size. It is posible to store an Item inside it only if
 * the size of the object is lower than the remain storage capacity.
 * 
 * A NestedContainer is a Container with Itembox. It can storage, retrieve and tell if can fit a given item 
 * all over the container it has.
 */
class Container{

    constructor(name){
        this.name = name;
    }

    canFit(item){
        throw new Error('Abstract method');
    }

    store(item){
        throw new Error('Abstract method');
    }

    retrieve(item){
        throw new Error('Abstract method');
    }
}

class Item {
    constructor(name, size){
        this.name = name;
        this.size = size;
    }

    getSize(){
        return this.size;
    }
}

class ItemContainer extends Container{
    constructor(name){
        super(name);
        this.array = [];
    }

    canFit(item){
        return true;
    }

    store(item){
        this.array.push(item);
        return [this.array.indexOf(item)];
    }

    retrieve(...index){
        return this.array[index];
    }
}

const itemContainer = new ItemContainer('Test Container')

class ItemBox extends ItemContainer{
    constructor(capacity=0){
        super('Itembox');
        this.capacity = capacity;
        this.usedSpace = 0;
    }

    canFit(item){
        return item.size <= (this.capacity - this.usedSpace)
    }

    store(item){
        if(this.canFit(item)){
            this.usedSpace += item.size;
            return super.store(item);
        } else {
            return false;
        }
    }
}

class NestedContainer extends Container {
    constructor(name, subcontainers) {
        super(name);
        this.subcontainers = subcontainers;
    }

    canFit(item){
        return this.subcontainers.some( subcontainer => subcontainer.canFit(item));
    }

    store(item){
        if ( this.canFit(item)){
            let i = this.subcontainers.findIndex(subcontainer => subcontainer.canFit(item));
            return [i, this.subcontainers[i].store(item)[0]];
        } else {
            return false;
        }
    }

    retrieve([index, ... rest]){
        return this.subcontainers[index].retrieve(...rest);
    }
}
