import React from 'react'

export default class ProfilePicture extends React.Component {
	render () {
		return (
			<div className='nav-picture'>
				<img src={this.props.userPicture}/>
			</div>
		)
	}
}
