import { gql } from 'react-apollo'

const allFiltersQuery = gql`
	query AllFiltersQuery {
		allDishes {
			restaurant
			city
			cuisine
		}
	}
`

export default allFiltersQuery