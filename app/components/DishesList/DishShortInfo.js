import React from 'react'
import {
	gql,
	graphql
} from 'react-apollo'

const DishShortInfoQuery = gql`
	query DishShortInfoQuery {
		allDishes {
			dish
			restaurant
		}
	}
`

const DishShortInfoNoData = ({ data: {loading, error, allDishes} }) => {
	
	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error.message}</p>
	}

	return (
		<ul>
			{allDishes.map( (dish) => 
				<li className='dish-short-info'>
					<p className='dish-short-info-name'>{dish.dish}</p>
					<p className='dish-short-info-restaurant'>{dish.restaurant}</p>
				</li>
			)}
		</ul>
	)

}

const DishShortInfo = graphql(DishShortInfoQuery)(DishShortInfoNoData)

export default DishShortInfo