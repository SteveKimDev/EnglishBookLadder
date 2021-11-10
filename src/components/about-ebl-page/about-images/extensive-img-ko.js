import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as AboutStyle from '../about-ebl.module.css';

const ExtenImgKo = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAboutEblPageAssembly {
          extensiveReadingImgKorean {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        className={`${AboutStyle.extenIntenImg}`}
        alt='Extensive Reading - English Book Ladder'
        fluid={
          data.contentfulAboutEblPageAssembly.extensiveReadingImgKorean.fluid
        }
      />
    )}
  />
);

export default ExtenImgKo;
