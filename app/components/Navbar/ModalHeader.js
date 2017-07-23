import React from 'react'

export default class ModalHeader extends React.Component {
	render () {
		return (
			<div className='modal-header'>
				<p>Filtrar por {this.props.filterName}</p>
				<span onClick={this.props.closeModal}> X </span>
			</div>
		)
	}
}
