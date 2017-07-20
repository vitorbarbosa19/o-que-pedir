import { gql } from 'react-apollo'

const filterCuisineQuery = gql`
	query FilterCuisineQuery {
		allDishes(orderBy: restaurant_ASC) {
			restaurant
		}
	}
`

// function uniq(a) {
//    return Array.from(new Set(a));
// }

// filterCuisineQuery = uniq(filterCuisine)

export default filterCuisineQuery