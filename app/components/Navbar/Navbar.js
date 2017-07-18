import React from 'react'
//import components
import ProfileMenu from './ProfileMenu/ProfileMenu'
import UserPicture from './UserPicture'
import SearchBar from './SearchBar'
import FilterLocation from './FilterLocation'
import FilterCuisine from './FilterCuisine'

export default class Navbar extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			profileMenuIsActive: false
		}
	}

	handleClick (event) {
		event.preventDefault()
		this.setState( (prevState) => {
			return {
				profileMenuIsActive: !prevState.profileMenuIsActive
			}
		})
	}

	render () {
		return (
			<div className='nav-container'>
				<ProfileMenu 
					profileMenuIsActive={this.state.profileMenuIsActive}
					slideMenuProfile={this.handleClick.bind(this)
				}/>
				<UserPicture slideMenuProfile={this.handleClick.bind(this)}/>
				<SearchBar />
				<FilterLocation />
				<FilterCuisine />
			</div>
		)
	}
}
