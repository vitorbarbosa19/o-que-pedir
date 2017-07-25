import React from 'react'
import { graphql } from 'react-apollo'
//import queries
import dishesListQuery from '../../queries/dishesListQuery'
//import components
import DishPosition from './DishPosition'
import DishShortInfo from './DishShortInfo'
import DishRating from './DishRating'

class DishesList extends React.Component {	
	render () {
		if (this.props.loading) {
			return <p>Loading...</p>
		}
		if (this.props.error) {
			return <p>{this.props.error.message}</p>
		}
		return (
			<ul className='dishes-container'>
				{this.props.allDishes.map( (dish) => 
					<li key={dish.id} className='dish-item'>
						<DishPosition />
						<DishShortInfo name={dish.name} restaurant={dish.restaurant}/>
						<DishRating />
					</li>
				)}
			</ul>
		)
	}
}

export default graphql(dishesListQuery, {
	options: (props) => ({
		variables: {
			filterByCity: props.filterByCity,
			filterByRestaurant: props.filterByRestaurant,
			filterByCuisine: props.filterByCuisine
		}
	}),
	props: ({ data: {loading, error, allDishes} }) => ({
		loading,
		error,
		allDishes
	})
})(DishesList)
