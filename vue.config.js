module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue_covid_tracker/tree/gh-pages'
      : '/'
  }