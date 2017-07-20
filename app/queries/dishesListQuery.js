import { gql } from 'react-apollo'

const dishesListQuery = gql`
	query DishesListQuery {
		allDishes(first: 10) {
			id
			name
			restaurant
		}
	}
`

export default dishesListQuery