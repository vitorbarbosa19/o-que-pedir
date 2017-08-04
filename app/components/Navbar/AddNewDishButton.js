import React from 'react'
//import components
import PlusIcon from '../../assets/PlusIcon'

export default class AddNewDishButton extends React.Component {
	render () {
		return (
			<a href='#' onClick={this.props.openNewDishModal}>
				<PlusIcon />
			</a>
		)
	}
}