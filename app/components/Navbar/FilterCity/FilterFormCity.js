import React from 'react'
//import components
import Spinner from '../../../assets/Spinner'

export default class FilterFormCity extends React.Component {
	render () {
		if (this.props.allCities === null)
			return <Spinner />
		return (
			<ul className='filter-container' onChange={this.props.userFilterSelectionCity} >
				<li className='filter-item'>
					<input type='radio' id='Todas' name='city' value='Todas' />
					<label htmlFor='Todas'>Todas</label>		
				</li>
				{this.props.allCities.map( (city, id) => 
					<li key={id} className='filter-item'>
							<input type='radio' id={id} name='city' value={city} />
							<label htmlFor={id}>{city}</label>
					</li>
				)}
			</ul>
		)
	}
}
