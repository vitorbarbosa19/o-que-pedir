import React from 'react'

export default class PlusIcon extends React.Component {
  render () {
    return (
      <div className='add-new-dish-btn'>
        <svg width={'88px'} height={'88px'} viewBox={'0 0 88 88'}>
          <defs>
            <filter x={'-8.8%'} y={'-6.2%'} width={'117.5%'} height={'117.5%'} filterUnits={'objectBoundingBox'} id={'filter-1'}>
              <feOffset dx={'0'} dy={'2'} in={'SourceAlpha'} result={'shadowOffsetOuter1'}></feOffset>
              <feGaussianBlur stdDeviation={'2'} in={'shadowOffsetOuter1'} result={'shadowBlurOuter1'}></feGaussianBlur>
              <feColorMatrix values={'0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0'} type={'matrix'} in={'shadowBlurOuter1'} result={'shadowMatrixOuter1'}></feColorMatrix>
              <feMerge>
                <feMergeNode in={'shadowMatrixOuter1'}></feMergeNode>
                <feMergeNode in={'SourceGraphic'}></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g stroke={'none'} strokeWidth={'1'} fill={'none'} fillRule={'evenodd'}>
            <g filter={'url(#filter-1)'} transform={'translate(4.000000, 2.000000)'} fillRule={'nonzero'}>
              <circle fill={'#f1f1f1'} cx={'40'} cy={'40'} r={'40'}></circle>
              <path 
                d={'M50.7368421,38.7368421 L41.2631579,38.7368421 L41.2631579,29.2631579 C41.2631579,28.5684211 40.6947368,28 40,28 C39.3052632,28 38.7368421,28.5684211 38.7368421,29.2631579 L38.7368421,38.7368421 L29.2631579,38.7368421 C28.5684211,38.7368421 28,39.3052632 28,40 C28,40.6947368 28.5684211,41.2631579 29.2631579,41.2631579 L38.7368421,41.2631579 L38.7368421,50.7368421 C38.7368421,51.4315789 39.3052632,52 40,52 C40.6947368,52 41.2631579,51.4315789 41.2631579,50.7368421 L41.2631579,41.2631579 L50.7368421,41.2631579 C51.4315789,41.2631579 52,40.6947368 52,40 C52,39.3052632 51.4315789,38.7368421 50.7368421,38.7368421 Z'} 
                fill={'#566270'} 
                fillRule={'nonzero'}>
              </path>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}
