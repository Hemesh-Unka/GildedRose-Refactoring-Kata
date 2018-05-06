describe('Conjured', function() {
  it('sell in decreses by 1', function() {
    // arrange
    var shop = new Shop([ new Item("Conjured", 10, 10)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].sellIn).toBe(9)
  });

  it('decreases in quality twice as fast as normal items', function() {
    // arrange
    var shop = new Shop([ new Item("Conjured", 10, 10)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].quality).toBe(8)
  });
});
