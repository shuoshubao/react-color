import React from 'react'
import reactCSS from '@nbfe/reactcss'

export const PhotoshopPreviews = ({ rgb, currentColor }) => {
  const styles = reactCSS({
    default: {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: `rgb(${rgb.r},${rgb.g}, ${rgb.b})`,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  })

  return (
    <div>
      <div style={styles.label}>new</div>
      <div style={styles.swatches}>
        <div style={styles.new} />
        <div style={styles.current} />
      </div>
      <div style={styles.label}>current</div>
    </div>
  )
}

export default PhotoshopPreviews
