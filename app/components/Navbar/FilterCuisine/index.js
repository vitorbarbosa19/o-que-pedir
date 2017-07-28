import React from 'react'
//import icons
import CuisineIcon from '../../../assets/CuisineIcon.js'
//import components
import FilterModal from '../FilterModal'
import FilterFormCuisine from './FilterFormCuisine'
import ModalHeader from '../ModalHeader'

export default class FilterCuisine extends React.Component {	
	render () {
		return (
			<div className='filter-cuisine'>
				<a href='#' onClick={this.props.openModalFilterCuisine}>
					<CuisineIcon />
				</a>
				<div className='filter-selected'>
					{ typeof this.props.filterByCuisine === 'object' ? 'Todas as cozinhas' : this.props.filterByCuisine }
				</div>
				<FilterModal
					className={this.props.modalFilterCuisineIsOpen ? 'filter-modal-open' : 'filter-modal-closed'}>
						<ModalHeader filterName='cozinha' closeModal={this.props.closeModalFilterCuisine} />
						{this.props.modalFilterCuisineIsOpen &&
							<FilterFormCuisine 
								userFilterSelectionCuisine={this.props.userFilterSelectionCuisine}
								allCuisines={this.props.allCuisines}
							/>
						}
				</FilterModal>
			</div>
		)
	}
}
