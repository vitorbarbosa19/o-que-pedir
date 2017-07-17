import React from 'react'
//import components
import DishPosition from './DishPosition'
import DishShortInfo from './DishShortInfo'
import DishRating from './DishRating'

export default class DishesList extends React.Component {
	render () {
		return (
			<div className='dishes-container'>
				<DishPosition />
				<DishShortInfo />
				<DishRating />
			</div>
		)
	}
}