import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as HomeStyle from '../homestyle.module.css';

const SliderImgFive = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulHomePageAssembly {
          slider5 {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img
        alt='English Book Ladder Slider Image'
        style={{ borderRadius: '5px' }}
        className={`${HomeStyle.sliderImg}`}
        fluid={data.contentfulHomePageAssembly.slider5.fluid}
      />
    )}
  />
);

export default SliderImgFive;
