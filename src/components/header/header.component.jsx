// Vendor
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

// Redux - reselect
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selector';

// Firebase
import {auth} from '../../firebase/firebase.utils';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Style
import './header.style.scss';

// Image
import {ReactComponent as Logo} from '../../assets/img/crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div 
                    className='option' 
                    onClick={()=> auth.signOut()}
                >
                    SIGN OUT
                </div>:
                <Link 
                    className='option' 
                    to='/login'
                >
                    SIGN IN
                </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? 
            null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)