import { gql } from 'react-apollo'

const createUserQuery = gql`
  mutation ($idToken: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}) {
      id
    }
  }
`

export default createUserQuery