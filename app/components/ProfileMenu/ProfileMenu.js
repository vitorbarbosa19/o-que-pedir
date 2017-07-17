import React from 'react'
//import components
 import MenuContainer from './MenuContainer'
// import DishShortInfo from './DishShortInfo'
// import DishRating from './DishRating'

export default class ProfileMenu extends React.Component {
	render () {
		return (
			<div className='profile-menu'>
				<MenuContainer />
			</div>
		)
	}
}