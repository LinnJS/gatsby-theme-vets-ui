module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Event',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bitter`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Source Sans Pro`,
            variants: [`300`, `400`, `700`],
          },
        ],
        cache: true,
        stats: true,
      },
    },
  ],
});
