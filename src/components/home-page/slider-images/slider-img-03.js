import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as HomeStyle from '../homestyle.module.css';

const SliderImgThree = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulHomePageAssembly {
          slider3 {
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
        fluid={data.contentfulHomePageAssembly.slider3.fluid}
      />
    )}
  />
);

export default SliderImgThree;
