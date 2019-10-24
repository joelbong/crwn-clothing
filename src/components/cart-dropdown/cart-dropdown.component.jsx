// Vendor modules
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

// Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// Redux - reselect
import {selectCartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

// Styles
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map((item) =>
                    <CartItem key={item.id} item={item}/>
                ) :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {toggleCartHidden(); history.push('/checkout')}}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));