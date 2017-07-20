import React from 'react'
//import components
import UserInfo from './UserInfo'
import UserActions from './UserActions'

export default class ProfileMenu extends React.Component {
	render () {
		return (
			<div className={this.props.profileMenuIsOpen ? 'profile-menu-open' : 'profile-menu-closed'}>
				<UserInfo closeMenuProfile={this.props.closeMenuProfile}/>
				<UserActions />
			</div>
		)
	}
}