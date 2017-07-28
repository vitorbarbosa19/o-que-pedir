import React from 'react'

export default class DishPosition extends React.Component {
	render () {
		return (
			<p className='dish-position'>
				{this.props.position + 1}
			</p>
		)
	}
}