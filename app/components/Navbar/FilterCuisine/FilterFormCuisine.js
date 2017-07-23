import React from 'react'
import { withApollo } from 'react-apollo'
import arrayOfUniqueValues from '../../../utils/arrayOfUniqueValues'
//import queries
import filterCuisineQuery from '../../../queries/filterCuisineQuery'

class FilterFormCuisine extends React.Component {	
	
	constructor(props) {
		super(props)
		this.state = {
			allCuisines: null
		}
	}

	async componentDidMount() {
		const result = await this.props.client.query({
			query: filterCuisineQuery
		})
		const allCuisines = result.data.allDishes
		this.setState({ allCuisines })
	}

	render () {
		if (this.state.allCuisines === null)
			return <p>Loading...</p>
		let uniqueListOfCuisines = arrayOfUniqueValues(this.state.allCuisines)
		return (
			<ul className='filter-container' onChange={this.props.userFilterSelectionCuisine} >
				{uniqueListOfCuisines.map( (cuisine, id) => 
					<li key={id} className='filter-item'>
							<input type='radio' id={id} name='cuisine' value={cuisine} />
							<label htmlFor={id}>{cuisine}</label>
					</li>
				)}
			</ul>
		)
	}
}

export default withApollo(FilterFormCuisine)
