import React from 'react'
import reactCSS from '@nbfe/reactcss'
import { map } from 'lodash'

import { Swatch } from '../common/index'

export const BlockSwatches = ({ colors, onClick, onSwatchHover }) => {
  const styles = reactCSS({
    default: {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  })

  return (
    <div style={styles.swatches}>
      {map(colors, c => (
        <Swatch
          key={c}
          color={c}
          style={styles.swatch}
          onClick={onClick}
          onHover={onSwatchHover}
          focusStyle={{
            boxShadow: `0 0 4px ${c}`
          }}
        />
      ))}
      <div style={styles.clear} />
    </div>
  )
}

export default BlockSwatches
