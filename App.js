
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth, API } from 'aws-amplify'

function App() {
  async function callApi(){
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    console.log({token})
    
    const requestInfo = {
      headers:{
        Authorization: token
      }
    }
    // works with authentication const data = await API.get('FlaskApi1','/summary', requestInfo)
    const data = await API.get('FlaskApi1','/summary', requestInfo)
    console.log({data})
  }
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <button onClick={callApi}>Call Api</button>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);