// Vendor modules
import React, {Component} from 'react';
import {connect} from 'react-redux';

// Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// Redux - reselect
import {selectCartItems} from '../../redux/cart/cart.selector'

// Styles
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map((item) =>
                <CartItem key={item.id} item={item}/>
            )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)