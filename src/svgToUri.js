import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const SvgToUri = Icon => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<Icon />))
  const uri = `url("data:image/svg+xml,${svgString}")`
  return uri
}

export default SvgToUri
