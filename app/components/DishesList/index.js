import React from 'react'
//import components
import DishPosition from './DishPosition'
import DishShortInfo from './DishShortInfo'
import DishRating from './DishRating'

export default class DishesList extends React.Component {	
	render () {
		return (
			<ul className='dishes-container'>
				{this.props.allDishes.map( (dish, id) => 
					<li key={dish.id} className='dish-item'>
						<DishPosition position={id} />
						<DishShortInfo name={dish.name} restaurant={dish.restaurant}/>
						<DishRating rating={dish.rating} />
					</li>
				)}
			</ul>
		)
	}
}
