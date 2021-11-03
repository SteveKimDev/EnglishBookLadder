import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as HomeStyle from '../homestyle.module.css';

const ProgramImgFour = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulHomePageAssembly {
          program4Assembly {
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
          data.contentfulHomePageAssembly.program4Assembly.programImage.fluid
        }
      />
    )}
  />
);

export default ProgramImgFour;
