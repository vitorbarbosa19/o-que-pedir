import React from 'react'
//import components
import ProfileMenu from './ProfileMenu/ProfileMenu'
import MenuIcon from '../../assets/MenuIcon'
import FilterRestaurant from './FilterRestaurant/index'
import FilterCity from './FilterCity/index'
import FilterCuisine from './FilterCuisine/index'

export default class Navbar extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			profileMenuIsOpen: false
		}
	}

	openMenuProfile(event) {
		event.preventDefault()
		this.setState({ profileMenuIsOpen: true })
	}

	closeMenuProfile(event) {
		event.preventDefault()
		this.setState({ profileMenuIsOpen: false })
	}

	render () {
		return (
			<div className='nav-container'>
				<ProfileMenu 
					profileMenuIsOpen={this.state.profileMenuIsOpen}
					closeMenuProfile={this.closeMenuProfile.bind(this)}
				/>
				<MenuIcon 
					openMenuProfile={this.openMenuProfile.bind(this)}
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
			</div>
		)
	}
}
