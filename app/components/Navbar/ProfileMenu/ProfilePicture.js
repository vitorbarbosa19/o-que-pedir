import React from 'react'
//import icons
import { defaultIcon } from '../../../assets/images.js'

export default class ProfilePicture extends React.Component {
	render () {
		return (
			<div className='nav-picture'>
				<a href='#' onClick={this.props.closeMenuProfile}>
					<img src={defaultIcon}/>
				</a>
			</div>
		)
	}
}
