import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const AboutSection = () => (
  <StaticQuery
    query={graphql`
      query HomePageAboutEnglish {
        allContentfulHomePageAssembly {
          nodes {
            aboutTitleEnglish
            aboutDescriptionEnglish {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className='section-blue-background'>
        <h2 className='section-title text-center'>
          {data.allContentfulHomePageAssembly.nodes[0].aboutTitleEnglish}
        </h2>
        <div>
          {renderRichText(
            data.allContentfulHomePageAssembly.nodes[0].aboutDescriptionEnglish
          )}
        </div>
        <Link to='/en/library-membership' className='cta-btn btn-center'>
          Read More
        </Link>
      </section>
    )}
  />
);

export default AboutSection;
