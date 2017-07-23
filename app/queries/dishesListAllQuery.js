import { gql } from 'react-apollo'

const dishesListAllQuery = gql`
	query DishesListAllQuery {
		allDishes(orderBy: rating_DESC, first: 30)
		{
			id
			name
			restaurant
			rating
		}
	}
`

export default dishesListAllQuery