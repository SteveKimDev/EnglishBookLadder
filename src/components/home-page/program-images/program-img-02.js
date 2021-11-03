import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as HomeStyle from '../homestyle.module.css';

const ProgramImgTwo = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulHomePageAssembly {
          program2Assembly {
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
        alt='EBL Program Image'
        style={{ borderRadius: '5px' }}
        className={`${HomeStyle.programCardImg}`}
        fluid={
          data.contentfulHomePageAssembly.program2Assembly.programImage.fluid
        }
      />
    )}
  />
);

export default ProgramImgTwo;
