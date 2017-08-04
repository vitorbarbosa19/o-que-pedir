import React from 'react'
import {
	gql,
	graphql,
	withApollo
} from 'react-apollo'
import Auth0Lock from 'auth0-lock'
//import queries
import createUserQuery from '../../queries/createUserQuery'
import userQuery from '../../queries/userQuery'
//import utils
import { AUTH_CONFIG } from '../../utils/auth-config'
//import components
import ProfileMenu from './ProfileMenu/ProfileMenu'
import MenuIcon from '../../assets/MenuIcon'
import FilterRestaurant from './FilterRestaurant/index'
import FilterCity from './FilterCity/index'
import FilterCuisine from './FilterCuisine/index'
import AddNewDishButton from './AddNewDishButton'
import AddNewDishModal from './AddNewDishModal'

class Navbar extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			userIsAuthenticated: false,
			profileMenuIsOpen: false,
			newDishModalIsOpen: false,
			isLoggedIn: false,
			userDatabaseId: null,
			userName: null,
			userPicture: null
		}
		this.lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, AUTH_CONFIG.options)
		//bindings
		this.login = this.login.bind(this)
		this.logout = this.logout.bind(this)
		this.openMenuProfile = this.openMenuProfile.bind(this)
		this.openNewDishModal = this.openNewDishModal.bind(this)
		this.closeMenuAndModal = this.closeMenuAndModal.bind(this)
	}

  async componentDidMount() {
  	//setup event listener to receive info from Auth0 after successful authentication
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
        this.setState({
        	userIsAuthenticated: true
        })
      })
    })
    this.lock.on('authorization_error', (err) => {
      console.log(`Authorization error: ${err.error}`)
    })
		if(localStorage.getItem('id_token')) {
			const userData = await this.props.client.query({
	  		query: userQuery
	  	})
	  	//if user is loggedin and returning, get his info from database and local storage
	  	if(userData.data.user) {
	  		this.setState({
	  			isLoggedIn: true,
	  			userDatabaseId: userData.data.user.id, //not the Auth0 Id, but the database Id
	  			userName: localStorage.getItem('name'),
	  			userPicture: localStorage.getItem('picture')
	  		})
	  	} 
	  	//else create new user and redirect
	  	else {
				const variables = {
		      idToken: localStorage.getItem('id_token')
		    }
		    this.props.createUserQuery({ variables })
		      .then((response) => {
		        console.log('Response:', response)
		        location.reload()
		      }).catch((e) => {
		        console.log('Error creating user:', e)
		      })		
		  }
		}
  }
  //calls location.reload() only when everything is done inside the callback 'this.lock.on'
  async componentDidUpdate() {
  	if(this.state.userIsAuthenticated) {
  		this.setState({
  			userIsAuthenticated: false
  		})
  		location.reload()
  	}
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('name')
    localStorage.removeItem('picture')
    location.reload()
  }

	openMenuProfile(event) {
		event.preventDefault()
		document.body.className = 'noscroll'
		this.setState({ profileMenuIsOpen: true })
	}

	openNewDishModal(event) {
		event.preventDefault()
		document.body.className = 'noscroll'
		this.setState({ newDishModalIsOpen: true })
	}

	closeMenuAndModal(event) {
		event.preventDefault()
		document.body.className = ''
		this.setState({ profileMenuIsOpen: false, newDishModalIsOpen: false })
	}

	render () {
		return (
			<div className='nav-container'>
				<ProfileMenu 
					isLoggedIn={this.state.isLoggedIn}
					userName={this.state.userName}
					userPicture={this.state.userPicture}
					login={this.login}
					logout={this.logout}
					profileMenuIsOpen={this.state.profileMenuIsOpen}
					closeMenuAndModal={this.closeMenuAndModal}
				/>
				<MenuIcon 
					openMenuProfile={this.openMenuProfile}
				/>
				<FilterRestaurant
					userFilterSelectionRestaurant={this.props.userFilterSelectionRestaurant}
					openModalFilterRestaurant={this.props.openModalFilterRestaurant}
					closeModalFilterRestaurant={this.props.closeModalFilterRestaurant}
					modalFilterRestaurantIsOpen={this.props.modalFilterRestaurantIsOpen}
					filterByRestaurant={this.props.filterByRestaurant}
					allRestaurants={this.props.allRestaurants}
				/>
				<FilterCity
					userFilterSelectionCity={this.props.userFilterSelectionCity}
					openModalFilterCity={this.props.openModalFilterCity}
					closeModalFilterCity={this.props.closeModalFilterCity}
					modalFilterCityIsOpen={this.props.modalFilterCityIsOpen}
					filterByCity={this.props.filterByCity}
					allCities={this.props.allCities}
				/>
				<FilterCuisine 
					userFilterSelectionCuisine={this.props.userFilterSelectionCuisine} 
					openModalFilterCuisine={this.props.openModalFilterCuisine}
					closeModalFilterCuisine={this.props.closeModalFilterCuisine}
					modalFilterCuisineIsOpen={this.props.modalFilterCuisineIsOpen}
					filterByCuisine={this.props.filterByCuisine}
					allCuisines={this.props.allCuisines}
				/>
				<AddNewDishButton
					openNewDishModal={this.openNewDishModal}
				/>
				<AddNewDishModal
					login={this.login}
					isLoggedIn={this.state.isLoggedIn}
					newDishModalIsOpen={this.state.newDishModalIsOpen}
					closeMenuAndModal={this.closeMenuAndModal}
					userId={this.state.userDatabaseId}
				/>
			</div>
		)
	}
}

export default graphql(createUserQuery, {name: 'createUserQuery'})(graphql(userQuery, {options: {fetchPolicy: 'network-only'}})(withApollo(Navbar)))
