import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.style.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:'',
        }
    }

    handleSunmit = (event) => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and account</span>

                <form onSubmit={this.handleSunmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label='email'
                    />
                    <FormInput
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label='password'
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn