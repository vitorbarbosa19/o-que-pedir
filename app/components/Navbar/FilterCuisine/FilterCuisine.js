import React from 'react'
//import icons
import { defaultIcon } from '../../../assets/images.js'
//import components
import FilterModal from '../FilterModal'
import FilterFormCuisine from './FilterFormCuisine'
import ModalHeader from '../ModalHeader'

export default class FilterCuisine extends React.Component {	
	render () {
		return (
			<div className='filter-cuisine'>
				<a href='#' onClick={this.props.openModalFilterCuisine}>
					<img src={defaultIcon}/>
				</a>
				<div className='filter-selected'>{this.props.filterByCuisine || 'Todas'}</div>
				<FilterModal
					className={this.props.modalFilterCuisineIsOpen ? 'filter-modal-open' : 'filter-modal-closed'}>
						<ModalHeader filterName='cozinha' closeModal={this.props.closeModalFilterCuisine} />
						{this.props.modalFilterCuisineIsOpen &&
							<FilterFormCuisine 
								userFilterSelectionCuisine={this.props.userFilterSelectionCuisine}
								clearFilter={this.props.clearFilter}
							/>
						}
				</FilterModal>
			</div>
		)
	}
}
