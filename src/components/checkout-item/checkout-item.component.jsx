//Vendor
import React from 'react';
import {connect} from 'react-redux';

// Redux - reselect
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

// Style
import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
    const {name, imageUrl, quantity, price} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart: (cartItem) => dispatch(clearItemFromCart(cartItem)),
    addItem: (cartItem) => dispatch(addItem(cartItem)),
    removeItem: (cartItem) => dispatch(removeItem(cartItem)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
