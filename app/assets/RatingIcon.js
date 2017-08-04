import React from 'react'

export default class RatingIcon extends React.Component {
	render () {
		return (
			<div className='stars-container'>
				<svg viewBox={[0, 0, 25, 23]} width={'100%'} className='star'>
			    <polygon
			    	className='star-fill'
			    	points={[9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78]} 
			    	style={{fillRule: 'nonzero'}}
			    />
			  </svg>
			  <svg viewBox={[0, 0, 25, 23]} width={'100%'} className='star'>
			    <polygon
			    	className={this.props.rating >= 1.5 ? 'star-fill' : 'star-nofill'}
			    	points={[9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78]} 
			    	style={{fillRule: 'nonzero'}}
			    />
			  </svg>
			  <svg viewBox={[0, 0, 25, 23]} width={'100%'} className='star'>
			    <polygon
			    	className={this.props.rating >= 2.5 ? 'star-fill' : 'star-nofill'}
			    	points={[9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78]} 
			    	style={{fillRule: 'nonzero'}}
			    />
			  </svg>
			</div>
		)
	}
}