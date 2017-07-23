import React from 'react'
import { Redirect } from 'react-router-dom'
//import icons
import { defaultIcon } from '../../../assets/images.js'
//import components
import FilterModal from '../FilterModal'
import FilterFormCuisine from './FilterFormCuisine'
import ModalHeader from '../ModalHeader'

export default class FilterCuisine extends React.Component {	

	constructor(props) {
		super(props)
		this.state = {
			redirectPath: null
		}
		this.redirectToFilterCuisine = this.redirectToFilterCuisine.bind(this)
	}

	redirectToFilterCuisine (event) {
		this.setState({ redirectPath: '/dishes-list-by-cuisine' })
		this.props.openModalFilterCuisine(event)
	}

	render () {
		return (
			<div className='filter-cuisine'>
				<a href='#' onClick={this.redirectToFilterCuisine}>
					<img src={defaultIcon}/>
				</a>
				<div className='filter-selected'>{this.props.filterByCuisine || 'Todas'}</div>
				<FilterModal
					className={this.props.modalFilterCuisineIsOpen ? 'filter-modal-open' : 'filter-modal-closed'}>
						<ModalHeader filterName='cozinha' closeModal={this.props.closeModalFilterCuisine} />
						{this.props.modalFilterCuisineIsOpen &&
							<FilterFormCuisine 
								userFilterSelectionCuisine={this.props.userFilterSelectionCuisine} 
							/>
						}
				</FilterModal>
				{this.state.redirectPath && <Redirect to={this.state.redirectPath} />}
			</div>
		)
	}
}
