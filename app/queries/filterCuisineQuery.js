import { gql } from 'react-apollo'

const filterCuisineQuery = gql`
	query FilterCuisineQuery {
		allDishes(orderBy: cuisine_ASC) {
			cuisine
		}
	}
`

export default filterCuisineQuery