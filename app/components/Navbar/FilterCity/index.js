import React from 'react'
//import icons
import CityIcon from '../../../assets/CityIcon'
//import components
import FilterModal from '../FilterModal'
import FilterFormCity from './FilterFormCity'
import ModalHeader from '../ModalHeader'

export default class FilterCity extends React.Component {
	render () {
		return (
			<div className='filter-city'>
				<a href='#' onClick={this.props.openModalFilterCity}>
					<CityIcon />
					{ null && <p className='filter-name'>Cidade</p>}
					<div className='filter-selected'>
						{ typeof this.props.filterByCity === 'object' ? 'Todas' : this.props.filterByCity }
					</div>
				</a>
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
