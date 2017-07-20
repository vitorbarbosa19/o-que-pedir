import React from 'react'
import { graphql } from 'react-apollo'
//import queries
import dishesListQuery from '../../queries/dishesListQuery'
//import components
import DishPosition from './DishPosition'
import DishShortInfo from './DishShortInfo'
import DishRating from './DishRating'

const DishesList = ({ data: {loading, error, allDishes} }) => {	
	if (loading) {
		return <p>Loading...</p>
	}
	if (error) {
		return <p>{error.message}</p>
	}
	return (
		<ul className='dishes-container'>
			{allDishes.map( (dish) => 
				<li className='dish-item'>
					<DishPosition />
					<DishShortInfo name={dish.name} restaurant={dish.restaurant}/>
					<DishRating />
				</li>
			)}
		</ul>
	)
}

const DishesListWithData = graphql(dishesListQuery)(DishesList)

export default DishesListWithData