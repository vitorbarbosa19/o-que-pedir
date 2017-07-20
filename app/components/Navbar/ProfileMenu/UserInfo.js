import React from 'react'
//import components
import ProfilePicture from './ProfilePicture'

export default class UserInfo extends React.Component {
	render () {
		return (
			<div className='user-info-container'>
				<ProfilePicture closeMenuProfile={this.props.closeMenuProfile}/>
				<p>Vitor Barbosa</p>
			</div>
		)
	}
}
