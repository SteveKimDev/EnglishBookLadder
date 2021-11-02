import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import * as HomeStyle from '../homestyle.module.css';

const ProgramImgOne = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "ebl-square.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);
  return (
    <GatsbyImage
      className={`${HomeStyle.programCardImg}`}
      alt='program image'
      //   imgStyle={{ borderRadius: '15px' }}
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};

export default ProgramImgOne;
