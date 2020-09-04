const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
module.exports = {
  siteMetadata: {
    title: "Mark Chen | Software Developer",
    titleTemplate: "",
    description:
      "A full-time student in the day, and a part-time software developer in the night.",
    url: "", // No trailing slash allowed!
    image: "/src/static/Mark_logo.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 10
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-material-ui`
  ]
}