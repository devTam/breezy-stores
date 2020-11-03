import React from 'react';
import { CartItemContainer, ImageContainer, ItemDetailsContainer, NameContainer } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer className="cart-item">
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer className="item-details">
      <NameContainer className="name">{name}</NameContainer>
<span className="price"> {quantity} x ${price}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
