require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: 'https://englishbookladder.com',
    title: 'English Book Ladder',
    description:
      '2009년 1월부터 분당 정자동에서 아이들과 어른들이 영어를 배울 수 있도록 돕고 있습니다. 우리의 철학은 영어 교육이 재미 있고 평생 학습되는 발전이라는 것입니다.',
    author: '@stevekimdev',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
            'xmlnsSerif',
            'serifId',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'ko',
        langKeyForNull: 'ko',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ],
};
