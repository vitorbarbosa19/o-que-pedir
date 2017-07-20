import React from 'react'
import { graphql } from 'react-apollo'
import arrayOfUniqueValues from '../../../utils/arrayOfUniqueValues'
//import queries
import filterCuisineQuery from '../../../queries/filterCuisineQuery'
//import components


const FilterFormCuisine = ({ data: {loading, error, allDishes} }) => {	
	if (loading) {
		return <p>Loading...</p>
	}
	if (error) {
		return <p>{error.message}</p>
	}
	let uniqueListOfRestaurants = arrayOfUniqueValues(allDishes)
	return (
		<ul className='filter-container'>
			{uniqueListOfRestaurants.map( (restaurant, id) => 
				<li key={id} className='dish-item'>
					<p>{restaurant}</p>
				</li>
			)}
		</ul>
	)
}

const FilterFormCuisineWithData = graphql(filterCuisineQuery)(FilterFormCuisine)

export default FilterFormCuisineWithData