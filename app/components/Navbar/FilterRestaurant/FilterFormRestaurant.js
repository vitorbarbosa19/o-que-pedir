import React from 'react'

export default class FilterFormRestaurant extends React.Component {	
	render () {
		if (this.props.allRestaurants === null)
			return <p>Loading...</p>
		return (
			<ul className='filter-container' onChange={this.props.userFilterSelectionRestaurant} >
				<li className='filter-item'>
					<input type='radio' id='Todas' name='restaurant' value='Todas' />
					<label htmlFor='Todas'>Todas</label>
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
