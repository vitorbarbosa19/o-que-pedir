import React from 'react'

export default class NavPicture extends React.Component {
	render () {
		return (
			<div className='nav-picture'>
				<a href='#' onClick={this.props.openMenuProfile}>
					<img src='https://goo.gl/yB9KEW'/>
				</a>
			</div>
		)
	}
}
