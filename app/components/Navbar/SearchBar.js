import React from 'react'

export default class SearchBar extends React.Component {
	render () {
		return (
			<div className='search-bar'>
				<form>
					<input 
						type='search' 
						placeholder='Procurar restaurante...'
					/>
				</form>
			</div>
		)
	}
}