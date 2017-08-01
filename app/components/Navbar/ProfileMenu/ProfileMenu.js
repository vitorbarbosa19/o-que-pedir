import React from 'react'
import {
	gql,
	graphql,
	withApollo
} from 'react-apollo'
//import components
import UserInfo from './UserInfo'
import UserActions from './UserActions'
import Auth from '../../Auth/Auth'

class ProfileMenu extends React.Component {
  
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false,
			userName: null,
			userPicture: null
		}
	}

  async componentDidMount() {
  	const userData = await this.props.client.query({
  		query: userQuery
  	})
  	if(userData.data.user) {
  		this.setState({
  			isLoggedIn: true,
  			userName: localStorage.getItem('name'),
  			userPicture: localStorage.getItem('picture')
  		})	
  	}
  	if(localStorage.getItem('id_token') && !userData.data.user) {
	    const variables = {
	      idToken: localStorage.getItem('id_token')
	    }
	    this.props.createUser({ variables })
	      .then((response) => {
	        console.log(response)
	        location.reload()
	      }).catch((e) => {
	        console.log(e)
	      })
  	}
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('name')
    localStorage.removeItem('picture')
    location.reload()
  }

	render () {
		return (
			<div className={this.props.profileMenuIsOpen ? 'profile-menu-open' : 'profile-menu-closed'}>
				{ this.state.isLoggedIn ? 
					<div>
						<UserInfo 
							userName={this.state.userName}
							userPicture={this.state.userPicture}
							closeMenuProfile={this.props.closeMenuProfile}
						/>
						<UserActions logout={this.logout.bind(this)} />
					</div>
					:
					<div>
						<Auth closeMenuProfile={this.props.closeMenuProfile} />
					</div>
				}
			</div>
		)
	}
}

const createUser = gql`
  mutation ($idToken: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}) {
      id
    }
  }
`

const userQuery = gql`
	query UserQuery {
		user {
			id
		}
	}
`

export default graphql(createUser, {name: 'createUser'})(graphql(userQuery, {options: {fetchPolicy: 'network-only'}})(withApollo(ProfileMenu)))
