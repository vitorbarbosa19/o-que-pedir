import React from 'react'
//import icons
import { defaultIcon } from '../../../assets/images.js'
//import components
import FilterModal from '../FilterModal'
import FilterFormRestaurant from './FilterFormRestaurant'
import ModalHeader from '../ModalHeader'

export default class FilterRestaurant extends React.Component {
	render () {
		return (
			<div className='filter-restaurant'>
				<a href='#' onClick={this.props.openModalFilterRestaurant}>
					<img src={defaultIcon}/>
				</a>
				<div className='filter-selected'>
					{ typeof this.props.filterByRestaurant === 'object' ? 'Todos os restaurantes' : this.props.filterByRestaurant }
				</div>
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
