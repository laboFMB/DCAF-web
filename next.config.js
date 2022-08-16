const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  imagesUnoptimized: true,
  basePath: '/DCAF-web',
  assetPrefix: '/DCAF-web',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  ...(process.env.STANDALONE && {
    experimental: {
      outputStandalone: 'true'
    }
  })
}

module.exports = withBundleAnalyzer(withMDX(nextConfig))
