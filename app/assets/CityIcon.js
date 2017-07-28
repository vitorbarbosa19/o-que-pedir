import React from 'react'

export default class CityIcon extends React.Component {
	render () {
		return (
			<div className='city-icon-container'>
				<svg width={'17px'} height={'25px'} viewBox={'0 0 68 100'}>
				  <g stroke={'none'} strokeWidth={'1'} fill={'none'} fillRule={'evenodd'}>
				    <g fillRule={'nonzero'} fill={'#566270'}>
				      <path d={'M34,0 C15.294,0 0.129,15.165 0.129,33.87 C0.129,34.271 0.141,34.679 0.159,35.091 C0.286,38.649 0.957,42.066 2.098,45.263 C9.324,69.015 34,100 34,100 C34,100 58.673,69.018 65.9,45.266 C67.043,42.069 67.713,38.649 67.839,35.091 C67.859,34.679 67.87,34.272 67.87,33.87 C67.871,15.165 52.706,0 34,0 Z M34,50.459 C24.839,50.459 17.411,43.031 17.411,33.87 C17.411,24.71 24.839,17.282 34,17.282 C43.162,17.282 50.589,24.71 50.589,33.87 C50.589,43.031 43.162,50.459 34,50.459 Z'}></path>
				    </g>
				  </g>
				</svg>
			</div>
		)
	}
}
