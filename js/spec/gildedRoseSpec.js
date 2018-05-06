describe("Gilded Rose", function() {

  it('once the sell by date had passed, quality degrades twice as fast', function() {
    const gildedRose = new Shop([ new Item("Item", 0, 2)])
    gildedRose.updateQuality();

    expect(gildedRose.items[0].sellIn).toEqual(-1);
    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it('the quality of an item is never negative', function() {
    const gildedRose = new Shop([ new Item("Item", 0, 2)])
    gildedRose.updateQuality();
    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[0].quality).not.toBe(-2);
  });

  it('Aged Brie - increases in quality the older it gets', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 2)])
    gildedRose.updateQuality();

    expect(gildedRose.items[0].sellIn).toEqual(-1);
    expect(gildedRose.items[0].quality).toEqual(4);
  });

  it('checks that the quality of an item is never more than 50', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 2)])
    for (var i = 0; i < 100; i++) {
      gildedRose.updateQuality();
    }
    expect(gildedRose.items[0].quality).toBe(50)
  });

  // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
  describe('sulfuras', function() {
    it('sellIn date does not change', function() {
      const shop = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80)])
      for (var i = 0; i < 50; i++) {
        shop.updateQuality();
      }

      expect(shop.items[0].sellIn).toBe(0)
    });

    it('quality does no decrease', function() {
      const shop = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80)])
      for (var i = 0; i < 50; i++) {
        shop.updateQuality();
      }

      expect(shop.items[0].quality).toBe(80)
    });
  });


  // "Backstage passes"
  //  Quality as its SellIn value approaches
  // 	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
  // 	Quality drops to 0 after the concert
  describe('backstage passes', function() {
    it('increases in quality as sellIn date approaches', function() {
      // arrange
      const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)])
      // act
      shop.updateQuality();

      // assert
      expect(shop.items[0].sellIn).toBe(14)
      expect(shop.items[0].quality).toBe(21)
    });

    it('quality increases by 2 when within 10 days or less till the concert', function() {
      // arrange
      const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)])

      // act
      shop.updateQuality();

      // assert
      expect(shop.items[0].sellIn).toBe(9)
      expect(shop.items[0].quality).toBe(22)
    });

    it('quality increases by 3 when within 5 days or less till the concert', function() {
      // arrange
      const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)])

      // act
      shop.updateQuality();

      // assert
      expect(shop.items[0].sellIn).toBe(4)
      expect(shop.items[0].quality).toBe(23)
    });

    it('quality drops to 0 after the concert', function() {
      // arrange
      const shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)])

      // act
      shop.updateQuality();

      // assert
      expect(shop.items[0].sellIn).toBe(-1)
      expect(shop.items[0].quality).toBe(0)
    });
  });
});
