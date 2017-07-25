import React from 'react'
//import icons
import { defaultIcon } from '../../../assets/images.js'
//import components
import FilterModal from '../FilterModal'
import FilterFormCity from './FilterFormCity'
import ModalHeader from '../ModalHeader'

export default class FilterCity extends React.Component {
	render () {
		return (
			<div className='filter-city'>
				<a href='#' onClick={this.props.openModalFilterCity}>
					<img src={defaultIcon}/>
				</a>
				<div className='filter-selected'>
					{ typeof this.props.filterByCity === 'object' ? 'Todas' : this.props.filterByCity }
				</div>
				<FilterModal
					className={this.props.modalFilterCityIsOpen ? 'filter-modal-open' : 'filter-modal-closed'}>
						<ModalHeader filterName='cidade' closeModal={this.props.closeModalFilterCity} />
						{this.props.modalFilterCityIsOpen &&
							<FilterFormCity
								userFilterSelectionCity={this.props.userFilterSelectionCity}
								allCities={this.props.allCities}
							/>
						}
				</FilterModal>
			</div>
		)
	}
}