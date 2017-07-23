import { gql } from 'react-apollo'

const dishesListByCuisineQuery = gql`
	query DishesListByCuisineQuery ($filterByCuisine: String) {
		allDishes(orderBy: rating_DESC, first: 30, filter: {
			AND: [
				{cuisine: $filterByCuisine}
			]
		}) {
			id
			name
			restaurant
			rating
		}
	}
`

export default dishesListByCuisineQuery