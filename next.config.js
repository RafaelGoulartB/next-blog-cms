module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  },
  pageExtensions: ['tsx'],
  images: {
    domains: ['media.graphcms.com']
  }
}
