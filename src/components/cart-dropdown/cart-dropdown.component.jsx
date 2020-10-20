import React from 'react';
import { connect } from 'react-redux';
import CustomBtn from '../custom-btn/custom-btn.component';
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomBtn>GO TO CHECKOUT</CustomBtn>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)