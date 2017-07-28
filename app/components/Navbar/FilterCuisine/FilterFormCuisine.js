import React from 'react'
//import components
import Spinner from '../../../assets/Spinner'

export default class FilterFormCuisine extends React.Component {	
	render () {
		if (this.props.allCuisines === null)
			return <Spinner />
		return (
			<ul className='filter-container' onChange={this.props.userFilterSelectionCuisine} >
				<li className='filter-item'>
					<input type='radio' id='Todas' name='cuisine' value='Todas' />
					<label htmlFor='Todas'>Todas</label>
				</li>
				{this.props.allCuisines.map( (cuisine, id) => 
					<li key={id} className='filter-item'>
							<input type='radio' id={id} name='cuisine' value={cuisine} />
							<label htmlFor={id}>{cuisine}</label>
					</li>
				)}
			</ul>
		)
	}
}
