import React from 'react'
//import components
import UserInfo from './UserInfo'
import UserActions from './UserActions'

export default class ProfileMenu extends React.Component {
	render () {
		return (
			<div className={this.props.profileMenuIsActive ? 'profile-menu-active' : 'profile-menu-inactive'}>
				<UserInfo slideMenuProfile={this.props.slideMenuProfile}/>
				<UserActions />
			</div>
		)
	}
}