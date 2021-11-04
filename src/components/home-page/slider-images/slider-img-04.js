import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as HomeStyle from '../homestyle.module.css';

const SliderImgFour = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulHomePageAssembly {
          slider4 {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        alt='EBL Slider Image'
        style={{ borderRadius: '5px' }}
        className={`${HomeStyle.sliderImg}`}
        fluid={data.contentfulHomePageAssembly.slider4.fluid}
      />
    )}
  />
);

export default SliderImgFour;
