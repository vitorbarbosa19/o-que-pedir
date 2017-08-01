import React from 'react'
//import components
import ProfilePicture from './ProfilePicture'

export default class UserInfo extends React.Component {
	render () {
		return (
			<div className='user-info-container'>
				<p className='close-btn' onClick={this.props.closeMenuProfile}> X </p>
				<ProfilePicture userPicture={this.props.userPicture} />
				<p>{this.props.userName}</p>
			</div>
		)
	}
}
