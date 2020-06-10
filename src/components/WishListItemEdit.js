import React from 'react';
import { observer } from 'mobx-react';

const WishListItemEdit = ({ item }) => {
  const onNameChange = (event) => {
    item.changeName(event.target.value);
  };

  const onPriceChange = (event) => {
    const price = parseInt(event.target.value);

    if (!isNaN(price)) item.changePrice(price);
  };

  const onImageChange = (event) => {
    item.changeImage(event.target.value);
  };

  return (
    <div className="item-edit">
      <div className="form-group">
        Name: <input value={item.name} onChange={onNameChange} />
      </div>
      <div className="form-group">
        Price: <input value={item.price} onChange={onPriceChange} />
      </div>
      <div className="form-group">
        Image: <input value={item.image} onChange={onImageChange} />
      </div>
    </div>
  );
};

export default observer(WishListItemEdit);
