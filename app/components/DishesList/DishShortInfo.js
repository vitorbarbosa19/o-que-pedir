import React from 'react'

export default class DishShortInfo extends React.Component {
	render () {
		return (
			<div className='dish-short-info'>
				<p className='dish-short-info-name'>{this.props.name}</p>
				<p className='dish-short-info-restaurant'>{this.props.restaurant}</p>
			</div>
		)
	}
}
