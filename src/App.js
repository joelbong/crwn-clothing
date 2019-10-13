import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginPage from './pages/login/login.component';
import Header from './components/header/header.component';
import {setCurrentUser} from './redux/user/user.action';

import './App.css';

class App extends Component  {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
   this.unsubscribeFromAuth() 
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
            exact 
            path='/login'
            render={
              () => this.props.currentUser ? (<Redirect to='/' />) : (<LoginPage/>)
            }
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
