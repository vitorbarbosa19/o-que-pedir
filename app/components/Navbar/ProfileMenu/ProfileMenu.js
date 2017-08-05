import React from 'react'
//import components
import UserInfo from './UserInfo'
import UserActions from './UserActions'
import Welcome from '../Welcome'

export default class ProfileMenu extends React.Component {
 	constructor(props) {
 		super(props)
 		this.state = {
 			goToHelp: false
 		}
 		this.goToHelpLink = this.goToHelpLink.bind(this)
 		this.backFromHelpLink = this.backFromHelpLink.bind(this)
 	}

 	goToHelpLink() {
 		this.setState({
 			goToHelp: true
 		})
 	}

 	backFromHelpLink() {
 		this.setState({
 			goToHelp: false
 		})
 	}

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
						<UserActions 
							goToHelpLink={this.goToHelpLink}
							backFromHelpLink={this.backFromHelpLink}
							help={this.state.goToHelp}
							logout={this.props.logout}
						/>
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

