import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItemsContainer, CustomButtonContainer, EmptyMessageContainer } from "./cart-dropdown.styles";

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer >
    <CartItemsContainer >
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButtonContainer onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButtonContainer>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
