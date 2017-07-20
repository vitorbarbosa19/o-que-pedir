import React from 'react'

export default class ProfilePicture extends React.Component {
	render () {
		return (
			<div className='nav-picture'>
				<a href='#' onClick={this.props.closeMenuProfile}>
					<img src='https://goo.gl/yB9KEW'/>
				</a>
			</div>
		)
	}
}
