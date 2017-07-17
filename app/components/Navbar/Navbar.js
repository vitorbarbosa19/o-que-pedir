import React from 'react'
//import components
import UserPicture from './UserPicture'
import SearchBar from './SearchBar'
import FilterLocation from './FilterLocation'
import FilterCuisine from './FilterCuisine'

export default class Navbar extends React.Component {
	render () {
		return (
			<div className='nav-container'>
				<UserPicture />
				<SearchBar />
				<FilterLocation />
				<FilterCuisine />
			</div>
		)
	}
}
