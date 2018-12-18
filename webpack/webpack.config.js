
module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'production': return require('./webpack.prod.js')
    default: return require('./webpack.dev.js')
  }
}
