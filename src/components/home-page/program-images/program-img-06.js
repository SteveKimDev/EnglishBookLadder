import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as HomeStyle from '../homestyle.module.css';

const ProgramImgSix = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulHomePageAssembly {
          program6Assembly {
            programImage {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        alt='English Book Ladder Program Image'
        style={{ borderRadius: '5px' }}
        className={`${HomeStyle.programCardImg}`}
        fluid={
          data.contentfulHomePageAssembly.program6Assembly.programImage.fluid
        }
      />
    )}
  />
);

export default ProgramImgSix;
