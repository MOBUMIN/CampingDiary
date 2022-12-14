import React from 'react'

const IconBase = ({ children, color, size, style = {}, width, height, ...props }, { reactIconBase = {} }) => {
  const computedSize = size || reactIconBase.size || '1em'

  const baseStyle = reactIconBase.style || {}
  const styleProp = {
    verticalAlign: 'middle',
    ...baseStyle,
    ...style
  }

  const computedColor = color || style.color || reactIconBase.color || baseStyle.color
  if (computedColor) {
    styleProp.color = computedColor
  }

  return (
    <svg
      children={children}
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      height={height || computedSize}
      width={width || computedSize}
      {...reactIconBase}
      {...props}
      style={styleProp}
    />
  )
}

export default IconBase;
