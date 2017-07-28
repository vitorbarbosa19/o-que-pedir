import React from 'react'
//import components
import StarsIcon from '../../assets/StarsIcon'

export default class DishRating extends React.Component {
	render () {
		return (
			<div className='dish-rating'>
				<StarsIcon rating={this.props.rating} />
			</div>
		)
	}
}