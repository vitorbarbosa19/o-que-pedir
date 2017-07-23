import React from 'react'
//import components
import ProfileMenu from './ProfileMenu/ProfileMenu'
import NavPicture from './NavPicture'
import SearchBar from './SearchBar'
import FilterLocation from './FilterLocation/FilterLocation'
import FilterCuisine from './FilterCuisine/FilterCuisine'

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
				<NavPicture 
					openMenuProfile={this.openMenuProfile.bind(this)}
				/>
				<SearchBar />
				<FilterLocation />
				<FilterCuisine 
					userFilterSelectionCuisine={this.props.userFilterSelectionCuisine} 
					openModalFilterCuisine={this.props.openModalFilterCuisine}
					closeModalFilterCuisine={this.props.closeModalFilterCuisine}
					modalFilterCuisineIsOpen={this.props.modalFilterCuisineIsOpen}
					filterByCuisine={this.props.filterByCuisine}
					clearFilter={this.props.clearFilter}
				/>
			</div>
		)
	}
}
