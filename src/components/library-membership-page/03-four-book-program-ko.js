import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const LibraryMembershipSection = () => (
  <StaticQuery
    query={graphql`
      query LibraryMembershipPageFourBookProgramKorean {
        allContentfulLibraryMembershipPageAssembly {
          nodes {
            fourBookProgramTitleKorean
            fourBookProgramDescriptionKorean {
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
              .fourBookProgramTitleKorean
          }
        </h2>
        <p className='text-center mb-3rem'>일주일에 한 번</p>
        <div>
          {renderRichText(
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .fourBookProgramDescriptionKorean
          )}
        </div>
      </section>
    )}
  />
);

export default LibraryMembershipSection;
