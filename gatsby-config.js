module.exports = {
  siteMetadata: {
    siteUrl: "https://englishbookladder.com",
    title: "English Book Ladder",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `English Book Ladder`,
        short_name: `EBL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FD7062`,
        display: `standalone`,
        icon: `src/images/ebl-logo-square.png`, // This path is relative to the root of the site.
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
            "xmlnsSerif",
            "serifId",
          ],
        },
      },
    },
  ],
};
