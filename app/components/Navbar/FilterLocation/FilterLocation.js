import React from 'react'
//import icons
import { defaultIcon } from '../../../assets/images.js'

export default class FilterLocation extends React.Component {
	render () {
		return (
			<div className='filter-location'>
				<img src={defaultIcon}/>
				<p>Sao Paulo</p>
			</div>
		)
	}
}