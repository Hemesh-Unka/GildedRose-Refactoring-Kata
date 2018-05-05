class Shop {
  constructor(inventory = new Inventory()){
    this.inventory = inventory;
  }


  updateQuality() {
    for (var i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name != 'Aged Brie' && this.inventory[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.inventory[i].quality > 0) {
          if (this.inventory[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.inventory[i].quality = this.inventory[i].quality - 1;
          }
        }
      } else {
        if (this.inventory[i].quality < 50) {
          this.inventory[i].quality = this.inventory[i].quality + 1;
          if (this.inventory[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.inventory[i].sellIn < 11) {
              if (this.inventory[i].quality < 50) {
                this.inventory[i].quality = this.inventory[i].quality + 1;
              }
            }
            if (this.inventory[i].sellIn < 6) {
              if (this.inventory[i].quality < 50) {
                this.inventory[i].quality = this.inventory[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.inventory[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.inventory[i].sellIn = this.inventory[i].sellIn - 1;
      }
      if (this.inventory[i].sellIn < 0) {
        if (this.inventory[i].name != 'Aged Brie') {
          if (this.inventory[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.inventory[i].quality > 0) {
              if (this.inventory[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.inventory[i].quality = this.inventory[i].quality - 1;
              }
            }
          } else {
            this.inventory[i].quality = this.inventory[i].quality - this.inventory[i].quality;
          }
        } else {
          if (this.inventory[i].quality < 50) {
            this.inventory[i].quality = this.inventory[i].quality + 1;
          }
        }
      }
    }

    return this.inventory;
  }
}
