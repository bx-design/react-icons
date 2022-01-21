/* eslint-disable @typescript-eslint/no-var-requires */
const { optimize } = require('svgo')

const PLUGINS = [
  {
    name: 'cleanupAttrs'
  },
  {
    name: 'removeDoctype'
  },
  {
    name: 'removeXMLProcInst'
  },
  {
    name: 'removeXMLNS'
  },
  {
    name: 'removeComments'
  },
  {
    name: 'removeMetadata'
  },
  {
    name: 'removeTitle'
  },
  {
    name: 'removeDesc'
  },
  {
    name: 'removeUselessDefs'
  },
  {
    name: 'removeEditorsNSData'
  },
  {
    name: 'removeEmptyAttrs'
  },
  {
    name: 'removeHiddenElems'
  },
  {
    name: 'removeEmptyText'
  },
  {
    name: 'removeViewBox',
    active: true
  },
  {
    name: 'removeEmptyContainers'
  },
  {
    name: 'cleanupEnableBackground'
  },
  {
    name: 'convertStyleToAttrs'
  },
  {
    name: 'convertColors',
    params: {
      currentColor: true
    }
  },
  {
    name: 'convertPathData'
  },
  {
    name: 'convertTransform'
  },
  {
    name: 'removeUnknownsAndDefaults'
  },
  {
    name: 'removeNonInheritableGroupAttrs'
  },
  {
    name: 'removeUselessStrokeAndFill',
    active: true
  },
  {
    name: 'removeUnusedNS'
  },
  {
    name: 'cleanupIDs'
  },
  {
    name: 'cleanupNumericValues'
  },
  {
    name: 'moveElemsAttrsToGroup'
  },
  {
    name: 'moveGroupAttrsToElems'
  },
  {
    name: 'collapseGroups'
  },
  {
    name: 'removeRasterImages'
  },
  {
    name: 'mergePaths'
  },
  {
    name: 'convertShapeToPath'
  },
  {
    name: 'sortAttrs'
  },
  {
    name: 'removeDimensions'
  },
  {
    name: 'removeAttributesBySelector',
    params: {
      selector: '*:not(svg)',
      attributes: ['stroke']
    }
  },
  {
    name: 'removeAttrs',
    params: { attrs: '(data.*|fill-rule)' }
  }
]

const svgo = (file) =>
  optimize(file, {
    plugins: [...PLUGINS, { name: 'cleanupIDs' }]
  })

module.exports = {
  svgo
}
