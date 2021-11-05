import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const FourBookProgramSection = () => (
  <StaticQuery
    query={graphql`
      query LibraryMembershipPageFourBookProgramEnglish {
        allContentfulLibraryMembershipPageAssembly {
          nodes {
            fourBookProgramTitleEnglish
            fourBookProgramDescriptionEnglish {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className='section-white-background'>
        <h2 className='section-title text-center'>
          {
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .fourBookProgramTitleEnglish
          }
        </h2>
        <p className='text-center mb-3rem'>Once a Week</p>
        <div>
          {renderRichText(
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .fourBookProgramDescriptionEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default FourBookProgramSection;
