import React from 'react'

export default class UserPicture extends React.Component {
	render () {
		return (
			<div className='user-picture'>
				<a href='#' onClick={this.props.slideMenuProfile}>
					<img src='https://goo.gl/yB9KEW'/>
				</a>
			</div>
		)
	}
}
