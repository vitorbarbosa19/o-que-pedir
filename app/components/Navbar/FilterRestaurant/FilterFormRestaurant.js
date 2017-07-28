import React from 'react'
//import components
import Spinner from '../../../assets/Spinner'

export default class FilterFormRestaurant extends React.Component {	
	render () {
		if (this.props.allRestaurants === null)
			return <Spinner />
		return (
			<ul className='filter-container' onChange={this.props.userFilterSelectionRestaurant} >
				<li className='filter-item'>
					<input type='radio' id='Todos' name='restaurant' value='Todos' />
					<label htmlFor='Todos'>Todos</label>
				</li>
				{this.props.allRestaurants.map( (restaurant, id) => 
					<li key={id} className='filter-item'>
							<input type='radio' id={id} name='restaurant' value={restaurant} />
							<label htmlFor={id}>{restaurant}</label>
					</li>
				)}
			</ul>
		)
	}
}
