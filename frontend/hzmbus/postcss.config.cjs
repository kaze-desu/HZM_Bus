module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 750,
        unitPrecision: 6,
        unitToConvert: 'px',
        viewportUnit: 'vmin',
        fontViewportUnit: 'vmin',
        propList: ['*'],
      }
    }
  }