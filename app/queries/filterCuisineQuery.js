import { gql } from 'react-apollo'

const filterCuisineQuery = gql`
	query FilterCuisineQuery {
		allDishes(orderBy: restaurant_ASC, first: 10) {
			restaurant
		}
	}
`

export default filterCuisineQuery