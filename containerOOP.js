// ----- CONTAINER CLASSES -----

class Container {
    constructor (name) {
      this.name = name;
    };
    canFit () {
      throw new Error ('Abstract method');
    };
    store () {
      throw new Error ('Abstract method');
    };
    retrieve () {
      throw new Error ('Abstract method');
    };
  };
  
  class ItemContainer extends Container {
    constructor () {
      super('ItemContainer');
      this.thingsInside = [];
    };
    canFit() {
      return true;
    };
    store(item) {
      this.thingsInside.push(item);
      return [this.thingsInside.indexOf(item)];
    };
    retrieve(index){
      let itemGetOutBox = this.thingsInside[index].name;
      this.thingsInside.splice(index,1);
      return `El objeto que he eliminado es ${itemGetOutBox}`;
    };
  };
  
  class ItemBox extends ItemContainer {
    constructor (capacity) {
      super();
      this.capacity = capacity;
      this.size = 0;
    };
    canFit() {
      console.log(`Todavía queda espacio para ${this.capacity - this.size}`);
    };
    store(item) {
      let space = this.size += item.size;
      if (space <= this.capacity) {
        this.thingsInside.push(item);
        return [this.thingsInside.indexOf(item)];
      } else {
        console.log('No cabe nada más!!');
      };
    };
  }
  
  // ----- ITEM CLASSES ------
  
  class Item {
    constructor (name, size) {
      this.name = name;
      this.size = size;
    };
    getSize() {
      return this.size;
    }
  };
  
  // ----- CREATING INSTANCES -----
  const item1 = new Item('Item1', 5);
  const item2 = new Item('Item2', 3);
  const item3 = new Item('Item3', 3);
  
  // const itemContainer = new ItemContainer();
  
  // itemContainer.canFit(item1);
  
  // const index1 = itemContainer.store(item1);
  // const index2 = itemContainer.store(item2);
  // const index3 = itemContainer.store(item3);
  
  // console.log(index3);
  
  // const retrieved = itemContainer.retrieve(index1);
  
  // console.log(retrieved);
  
  // console.log(itemContainer);
  
  const box = new ItemBox(10);
  
  
  box.store(item1);
  box.store(item2);
  
  box.canFit(item3);
  
  console.log(box);
  