describe('Sulfuras', function() {
  it('the quality of an item is never negative', function() {
    // arrange
    const shop = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80)])

    // act
    for (var i = 0; i < 50; i++) {
      shop.updateQuality();
    }

    // assert
    expect(shop.items[0].quality).toBe(80);
  });

  it('sell in date does not change', function() {
    // arrange
    const shop = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80)])

    // act
    for (var i = 0; i < 50; i++) {
      shop.updateQuality();
    }

    // assert
    expect(shop.items[0].sellIn).toBe(0)
  });

  it('quality does not decrease', function() {
    // arrange
    const shop = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80)])

    // act
    for (var i = 0; i < 50; i++) {
      shop.updateQuality();
    }

    // assert
    expect(shop.items[0].quality).toBe(80)
  });
});
