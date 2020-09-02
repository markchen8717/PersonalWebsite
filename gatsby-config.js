const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
module.exports = {
  plugins: [
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false, // Defines if animation needs to be launched once
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `otz2bb8xelzb`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-material-ui`
  ]
}