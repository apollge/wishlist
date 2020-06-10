import { onPatch } from 'mobx-state-tree';
import { reaction } from 'mobx';
import { WishList, WishListItem } from './WishList';

it('can create an instance of a model', () => {
  const item = WishListItem.create({
    name: 'Chronicles of Narnia Box Set - C.S. Lewis',
    price: 28.73,
  });

  expect(item.price).toBe(28.73);
  expect(item.image).toBe('');
  item.changeName('Narnia');
  expect(item.name).toBe('Narnia');
});

it('can create a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: 'Chronicles of Narnia Box Set - C.S. Lewis',
        price: 28.73,
      },
    ],
  });

  expect(list.items.length).toBe(1);
  expect(list.items[0].price).toBe(28.73);
});

it('can add new items - 2', () => {
  const list = WishList.create();
  const patches = [];
  onPatch(list, (patch) => {
    patches.push(patch);
  });

  list.add({
    name: 'Chesterton',
    price: 10,
  });

  list.items[0].changeName('Book of G.K. Chesterton');

  expect(patches).toMatchSnapshot();
});

it('can calculate total price of a wishlist', () => {
  const list = WishList.create({
    items: [
      {
        name: 'Machine Gun Preacher',
        price: 7.35,
        image: '',
      },
      {
        name: 'LEGO Mindstorms EV3',
        price: 349.95,
        image: '',
      },
    ],
  });

  expect(list.totalPrice).toBe(357.3);

  let changed = 0;
  reaction(
    () => list.totalPrice,
    () => changed++
  );

  expect(changed).toBe(0);
  console.log(list.totalPrice);
  list.items[0].changeName('Test');
  expect(changed).toBe(0);
  list.items[0].changePrice(10);
  expect(changed).toBe(1);
});
