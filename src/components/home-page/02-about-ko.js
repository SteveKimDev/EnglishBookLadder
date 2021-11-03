import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const AboutSection = () => (
  <StaticQuery
    query={graphql`
      query HomePageAboutKorean {
        allContentfulHomePageAssembly {
          nodes {
            aboutTitleKorean
            aboutDescriptionKorean {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className='section-blue-background'>
        <h2 className='section-title text-center'>
          {data.allContentfulHomePageAssembly.nodes[0].aboutTitleKorean}
        </h2>
        <p>
          {renderRichText(
            data.allContentfulHomePageAssembly.nodes[0].aboutDescriptionKorean
          )}
        </p>
        <Link to='/library-membership' className='cta-btn btn-center'>
          더 읽기
        </Link>
      </section>
    )}
  />
);

export default AboutSection;
