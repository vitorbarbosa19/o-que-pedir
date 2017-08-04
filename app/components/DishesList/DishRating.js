import React from 'react'
//import components
import RatingIcon from '../../assets/RatingIcon'

export default class DishRating extends React.Component {
	render () {
		return (
			<div className='dish-rating'>
				<RatingIcon rating={this.props.rating} />
			</div>
		)
	}
}