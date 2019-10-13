import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import './header.style.scss';

import {ReactComponent as Logo} from '../../assets/img/crown.svg';

const Header = ({currentUser}) => (
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
        </div>
    </div>
)

const mapToState = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapToState)(Header)