import React from 'react'
//import icons
import { defaultIcon } from '../../assets/images.js'

export default class DishRating extends React.Component {
	render () {
		return (
			<img className='dish-rating' src={defaultIcon} />
		)
	}
}