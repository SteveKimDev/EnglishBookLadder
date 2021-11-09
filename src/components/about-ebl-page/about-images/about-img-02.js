import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as AboutStyle from '../about-ebl.module.css';

const AboutEblImgTwo = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAboutEblPageAssembly {
          ourEnglishLibraryImage {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        alt='About EBL - English Book Ladder'
        style={{ borderRadius: '5px' }}
        className={`${AboutStyle.aboutImg}`}
        fluid={data.contentfulAboutEblPageAssembly.ourEnglishLibraryImage.fluid}
      />
    )}
  />
);

export default AboutEblImgTwo;
