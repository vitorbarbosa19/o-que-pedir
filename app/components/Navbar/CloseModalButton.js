import React from 'react'

export default class CloseModalButton extends React.Component {
	render () {
		return <div className='close-modal-btn' onClick={this.props.closeModal}> X </div>
	}
}
