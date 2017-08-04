import { gql } from 'react-apollo'

const newDish = gql`
	mutation newDish (
	  $country: String!,
	  $state: String!,
	  $city: String!,
	  $restaurant: String!,
	  $name: String!,
	  $cuisine: String!,
	  $stars: [Int!],
	  $comments: [String!],
	  $rating: Int,
	  $creatorId: ID!
	) {
	  createDish (
	    country: $country
	    state: $state
	    city: $city
	    restaurant: $restaurant
	    name: $name
	    cuisine: $cuisine
	    stars: $stars
	    comments: $comments
	    rating: $rating
	    creatorId: $creatorId
	  ) {
	    id
	    name
	    creator {
	      id
	      dishesCreated {
	        name
	      }
	    }
	  }
	}
`

export default newDish