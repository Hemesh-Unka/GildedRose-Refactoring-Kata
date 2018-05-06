describe('Brie', function() {
  it('sell in decreases by 1', function() {
    // arrange
    var shop = new Shop([ new Item("Aged Brie", 10, 0)])

    // act
    shop.updateQuality()

    // assert
    expect(shop.items[0].sellIn).toEqual(9);
  });

  it('quality is never negative', function() {
    // arrange
    var shop = new Shop([ new Item("Aged Brie", 10, 0)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].sellIn).toEqual(9);
  });

  it('the quaility of an item never goes over 50', function() {
    // arrange
    var shop = new Shop([ new Item("Aged Brie", 10, 0)])

    // act
    for (var i = 0; i < 100; i++) {
      shop.updateQuality();
    }

    // assert
    expect(shop.items[0].quality).toBe(50)
  });

  it('increases in quality as the older it gets', function() {
  // arrange
    var shop = new Shop([ new Item("Aged Brie", 10, 0)]);

  // act
    shop.updateQuality();

  // assert
    expect(shop.items[0].sellIn).toEqual(9);
    expect(shop.items[0].quality).toEqual(1);
  });
});
