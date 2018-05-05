class Inventory {
  constructor(item = Item) {
    this.inventory = [];
    this.Item = item;
  }

  add(name, sellIn, quality) {
    this.inventory.push(new this.Item(name, sellIn, quality));
  }

  get() {
    return this.inventory;
  }

  count() {
    return this.inventory.length
  };
}
