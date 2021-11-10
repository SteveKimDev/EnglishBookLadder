import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as AboutStyle from '../about-ebl.module.css';

const IntenImgKo = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAboutEblPageAssembly {
          intensiveReadingImgKorean {
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
        alt='Intensive Reading - English Book Ladder'
        fluid={
          data.contentfulAboutEblPageAssembly.intensiveReadingImgKorean.fluid
        }
      />
    )}
  />
);

export default IntenImgKo;
