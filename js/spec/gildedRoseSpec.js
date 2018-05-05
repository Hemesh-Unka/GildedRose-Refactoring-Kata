describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it('once the sell by date had passed, quality degrades twice as fast', function() {
    // constructor(name, sellIn, quality){
    const gildedRose = new Shop([ new Item("Item", 0, 2)])
    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it('the quality of an item is never negative', function() {
    const gildedRose = new Shop([ new Item("Item", 0, 2)])
    gildedRose.updateQuality();
    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toEqual(0);
    expect(gildedRose.items[0].quality).not.toBe(-2);
  });

});
