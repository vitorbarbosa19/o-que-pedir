import React from 'react'
//import icons
import { defaultIcon } from '../../../assets/images.js'
//import components
import FilterModal from '../FilterModal'
import FilterFormCuisine from './FilterFormCuisine'
import CloseModalButton from '../CloseModalButton'

export default class FilterCuisine extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			filterIsOpen: false
		}
	}

	openFilterCuisine (event) {
		event.preventDefault()
		this.setState({ filterIsOpen: true })
	}

	closeFilterCuisine (event) {
		event.preventDefault()
		this.setState({ filterIsOpen: false })
	}

	render () {
		return (
			<div className='filter-cuisine'>
				<a href='#' onClick={this.openFilterCuisine.bind(this)}>
					<img src={defaultIcon}/>
				</a>
				<p>Mostrar tudo</p>
				<FilterModal 
					className={this.state.filterIsOpen ? 'filter-modal-open' : 'filter-modal-closed'}>
						<CloseModalButton closeModal={this.closeFilterCuisine.bind(this)} />
						<FilterFormCuisine />
				</FilterModal>
			</div>
		)
	}
}