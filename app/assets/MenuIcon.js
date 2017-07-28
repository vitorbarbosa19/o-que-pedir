import React from 'react'

export default class MenuIcon extends React.Component {
  render () {
    return (
      <div className='menu-btn'>
        <a href='#' onClick={this.props.openMenuProfile}>
          <svg width={'10px'} height={'40px'} viewBox={'0 0 10 40'}>
            <g stroke={'none'} strokeWidth={'1'} fill={'none'} fillRule={'evenodd'}>
              <circle fill={'#566270'} cx={'5'} cy={'14'} r={'2'}></circle>
              <circle fill={'#566270'} cx={'5'} cy={'20'} r={'2'}></circle>
              <circle fill={'#566270'} cx={'5'} cy={'26'} r={'2'}></circle>
            </g>
          </svg>
        </a>
      </div>
    )
  }
}
