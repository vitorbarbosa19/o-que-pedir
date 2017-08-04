import { gql } from 'react-apollo'

const userQuery = gql`
	query UserQuery {
		user {
			id
		}
	}
`

export default userQuery
