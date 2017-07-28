import React from 'react'
//import components
import RestaurantIcon from '../../assets/RestaurantIcon'
import CityIcon from '../../assets/CityIcon'
import CuisineIcon from '../../assets/CuisineIcon'

export default class ModalHeader extends React.Component {
	render () {
		return (
			<div className='modal-header'>
				<p className='close-btn' onClick={this.props.closeModal}> X </p>
				<div className='filter-title'>
					{this.props.filterName === 'restaurante' ? <RestaurantIcon /> : <span></span>}
					{this.props.filterName === 'cidade' ? <CityIcon /> : <span></span>}
					{this.props.filterName === 'cozinha' ? <CuisineIcon /> : <span></span>}
					<p>Filtrar por {this.props.filterName}</p>
				</div>
			</div>
		)
	}
}
