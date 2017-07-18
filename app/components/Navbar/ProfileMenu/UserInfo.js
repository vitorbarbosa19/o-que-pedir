import React from 'react'
//import components
import UserPicture from '../UserPicture'

export default class UserInfo extends React.Component {
	render () {
		return (
			<div className='user-info-container'>
				<UserPicture slideMenuProfile={this.props.slideMenuProfile}/>
				<p>Vitor Barbosa</p>
			</div>
		)
	}
}
