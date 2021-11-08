import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const LibraryMembershipSection = () => (
  <StaticQuery
    query={graphql`
      query LibraryMembershipPageGeneralMembershipKorean {
        allContentfulLibraryMembershipPageAssembly {
          nodes {
            libraryMembershipTitleKorean
            libraryScheduleKorean
            libraryBusinessHours
            libraryMembershipDescriptionKorean {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className='section-blue-background last-section'>
        <h2 className='section-title text-center'>
          {
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .libraryMembershipTitleKorean
          }
        </h2>
        <p className='text-center mb-3rem'>
          {
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .libraryScheduleKorean
          }
          <br />
          {
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .libraryBusinessHours
          }
          <br />
          (무제한 사용 시간)
        </p>

        <div>
          {renderRichText(
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .libraryMembershipDescriptionKorean
          )}
        </div>
      </section>
    )}
  />
);

export default LibraryMembershipSection;
