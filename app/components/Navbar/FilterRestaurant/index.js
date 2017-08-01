import React from 'react'
//import icons
import RestaurantIcon from '../../../assets/RestaurantIcon'
//import components
import FilterModal from '../FilterModal'
import FilterFormRestaurant from './FilterFormRestaurant'
import ModalHeader from '../ModalHeader'

export default class FilterRestaurant extends React.Component {
	render () {
		return (
			<div className='filter-restaurant'>
				<a href='#' onClick={this.props.openModalFilterRestaurant}>
					<RestaurantIcon />
					{ null && <p className='filter-name'>Restaurante</p>}
					<div className='filter-selected'>
						{ typeof this.props.filterByRestaurant === 'object' ? 'Todos' : this.props.filterByRestaurant }
					</div>
				</a>
				<FilterModal
					className={this.props.modalFilterRestaurantIsOpen ? 'filter-modal-open' : 'filter-modal-closed'}>
						<ModalHeader filterName='restaurante' closeModal={this.props.closeModalFilterRestaurant} />
						{this.props.modalFilterRestaurantIsOpen &&
							<FilterFormRestaurant
								userFilterSelectionRestaurant={this.props.userFilterSelectionRestaurant}
								allRestaurants={this.props.allRestaurants}
							/>
						}
				</FilterModal>
			</div>
		)
	}
}
