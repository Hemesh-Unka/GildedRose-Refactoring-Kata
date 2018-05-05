// describe("Gilded Rose", function() {
//
//   it("should foo", function() {
//     const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toEqual("fixme");
//   });
//
// });

describe("Shop", function() {
  describe('#add', function() {
    it('is able to add an item to the shop inventory', function() {
      // arrange
      const shop = new Shop();

      // act
      shop.inventory.add('fakeItem', 0, 0);

      // assert
      expect(shop.inventory.get()[0].name).toEqual('fakeItem');
    });
  });

  // describe('#addItem', function() {
  //   it('should be able to add and item to the shop inventory', function() {
  //     // arrange
  //     const shop = new Shop();
  //     const fakeItem = { name: 'fakeItem', sellIn: 0, quality: 0 };
  //     const spy = spyOn(shop, 'getInvertory').and.returnValue([fakeItem]);
  //
  //     // act
  //     shop.addItem('fakeItem', 0, 0);
  //
  //     // assert
  //     expect(shop.getInvertory()).toEqual([fakeItem])
  //   });
  // });

  // describe('#updateQuality', function() {
  //   it('should increase the quality twice as fast once the sell by date has passed', function() {
  //     // arrange
  //     const shop = new Shop([new Item()])
  //
  //     // act
  //
  //     // assert
  //
  //   });
  // });
});
