import React from 'react'


import './custom-button.style.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...props}) => (
    <button className={
                `${isGoogleSignIn ? 'google-sign-in': ''}
                ${inverted ? 'inverted': ''}
                custom-button`}
        {...props}
    
    >
        {children}
    </button>
)

export default CustomButton;
