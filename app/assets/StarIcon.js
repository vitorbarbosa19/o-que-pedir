import React from 'react'

export default class StarIcon extends React.Component {
	render () {
		return (
			<svg width={'25px'} height={'23px'} viewBox={'0, 0, 25, 23'} className='star'>
		    <polygon
		    	className={this.props.starFill}
		    	points={[9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78]} 
		    	style={{fillRule: 'nonzero'}}
		    />
		  </svg>
		)
	}
}