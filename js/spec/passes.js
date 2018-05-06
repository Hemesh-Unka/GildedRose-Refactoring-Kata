describe('Passes', function() {
  it('sell in decreses by 1', function() {
    // arrange
    var shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].sellIn).toBe(14)
  });

  it('increases in quality as sell in date approaches', function() {
    // arrange
    var shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].quality).toBe(21)
  });

  it('quality increases by 2 when within 10 days or less till the concert', function() {
    // arrange
    var shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].quality).toBe(22)
  });

  it('quality increases by 3 when within 5 days or less till the concert', function() {
    // arrange
    var shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].quality).toBe(23)
  });

  it('quality drops to 0 after the concert', function() {
    // arrange
    var shop = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)])

    // act
    shop.updateQuality();

    // assert
    expect(shop.items[0].quality).toBe(0)
  });
});
