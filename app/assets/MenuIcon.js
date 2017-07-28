import React from 'react'

export default class MenuIcon extends React.Component {
  render () {
    return (
      <div className='menu-btn'>
        <a href='#' onClick={this.props.openMenuProfile}>
          <svg width={'35px'} height={'55px'} viewBox={'0 0 35 55'}>
            <g stroke={'none'} strokeWidth={'1'} fill={'none'} fillRule={'evenodd'}>
              <rect fill={'#e5e5e5'} x={'0'} y={'0'} width={'35'} height={'55'} rx={'2'}></rect>
              <polygon 
                fill={'#566270'} 
                fillRule={'nonzero'} 
                transform={'translate(17.500000, 28.000000) rotate(-270.000000) translate(-17.500000, -28.000000)'} 
                points={'17.5 38 10 28.9090909 15.625 28.9090909 15.625 18 19.375 18 19.375 28.9090909 25 28.9090909'}>
              </polygon>
            </g>
          </svg>
        </a>
      </div>
    )
  }
}
