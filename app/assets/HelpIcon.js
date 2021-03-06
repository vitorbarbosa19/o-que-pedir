import React from 'react'

export default class HelpIcon extends React.Component {
	render () {
		return (
			<div className='help-icon-container'>
				<svg width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
					<path d={"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}></path>
					<circle cx={"12"} cy={"12"} r={"10"}></circle>
					<line x1={"12"} y1={"17"} x2={"12"} y2={"17"}></line>
				</svg>
			</div>
		)
	}
}
