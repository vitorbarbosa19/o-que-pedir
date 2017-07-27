import { gql } from 'react-apollo'

const dishesListQuery = gql`
	query DishesListQuery (
		$filterByRestaurant: [String!], 
		$filterByCity: [String!], 
		$filterByCuisine: [String!]
	) {
			allDishes(orderBy: rating_DESC, filter: {
				AND: [
					{restaurant_in: $filterByRestaurant},
					{city_in: $filterByCity},
					{cuisine_in: $filterByCuisine}
				]
			}) {
				id
				name
				restaurant
				city
				cuisine
				rating
		}
	}
`

export default dishesListQuery