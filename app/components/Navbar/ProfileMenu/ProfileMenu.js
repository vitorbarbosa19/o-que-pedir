import React from 'react'
//import components
import UserInfo from './UserInfo'
import UserActions from './UserActions'
import Welcome from '../Welcome'

export default class ProfileMenu extends React.Component {
 	render () {
		return (
			<div className={this.props.profileMenuIsOpen ? 'profile-menu-open' : 'profile-menu-closed'}>
				{ this.props.isLoggedIn ? 
					<div>
						<UserInfo 
							userName={this.props.userName}
							userPicture={this.props.userPicture}
							closeMenuAndModal={this.props.closeMenuAndModal}
						/>
						<UserActions logout={this.props.logout} />
					</div>
					:
					<Welcome 
						login={this.props.login}
						closeMenuAndModal={this.props.closeMenuAndModal} 
					/>
				}
			</div>
		)
	}
}

