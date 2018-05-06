describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

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
    // constructor(name, sellIn, quality){
    expect(gildedRose.items[0].quality).toBe(50)
  });
});
