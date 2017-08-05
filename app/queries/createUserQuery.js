import { gql } from 'react-apollo'

const createUserQuery = gql`
  mutation newUser (
  	$idToken: String!,
  	$username: String!
  ) {
    createUser (
    	authProvider: { auth0: { idToken: $idToken } }
    	username: $username
    ) {
      id
    }
  }
`

export default createUserQuery