import React from 'react'
//import icons
import { defaultIcon } from '../../assets/images.js'

export default class NavPicture extends React.Component {
	render () {
		return (
			<div className='nav-picture'>
				<a href='#' onClick={this.props.openMenuProfile}>
					<img src={defaultIcon}/>
				</a>
			</div>
		)
	}
}
