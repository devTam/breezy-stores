import React from 'react';
import { CheckOutItem, CartItemValues, ImageContainer, Image, Quantity, Arrow, Value, RemoveButton } from "./checkout-item.styles";
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckOutItem >
      <ImageContainer >
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <CartItemValues>{name}</CartItemValues>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <CartItemValues>{price}</CartItemValues>
      <RemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckOutItem>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
