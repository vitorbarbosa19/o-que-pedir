import React from 'react'

export default class BackIcon extends React.Component {
	render () {
		return (
			<div className='back-icon-container'>
				<svg width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth="2" strokeLinecap={"round"} strokeLinejoin={"round"}>
					<line x1={"20"} y1={"12"} x2={"4"} y2={"12"}></line>
					<polyline points={"10 18 4 12 10 6"}></polyline>
				</svg>
			</div>
		)
	}
}
