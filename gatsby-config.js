const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production')
{
  dotenv.config();
}
module.exports = {
  plugins: [
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
    `@contentful/gatsby-transformer-contentful-richtext`
  ]
}