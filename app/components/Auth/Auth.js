import React from 'react'
//import components
import Auth0Lock from 'auth0-lock'
import { AUTH_CONFIG } from './auth-config'
import Welcome from '../Navbar/Welcome'

export default class Auth extends React.Component {

  constructor(props) {
    super(props)
    this.lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, AUTH_CONFIG.options)
    //bindings
    this.login = this.login.bind(this)
  }

  login() {
    this.lock.show();
  }

  componentDidMount() {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken)
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if(error) {
          console.log(`Error fetching user info: ${error}`)
        }
        else {
          localStorage.setItem('name', profile.name)
          localStorage.setItem('picture', profile.picture)
        }
        location.reload()
      })
    })
    this.lock.on('authorization_error', (err) => {
      console.log(`Authorization error: ${err.error}`)
    })
  }

  render() {
    return (
      <Welcome 
        closeMenuProfile={this.props.closeMenuProfile}
        login={this.login}
      />
    )
  }
}
