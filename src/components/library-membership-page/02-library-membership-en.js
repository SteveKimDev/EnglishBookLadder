import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const FourBookProgramSection = () => (
  <StaticQuery
    query={graphql`
      query LibraryMembershipPageGeneralMembershipEnglish {
        allContentfulLibraryMembershipPageAssembly {
          nodes {
            libraryMembershipTitleEnglish
            libraryScheduleEnglish
            libraryBusinessHours
            libraryMembershipDescriptionEnglish {
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
              .libraryMembershipTitleEnglish
          }
        </h2>
        <p className='text-center mb-3rem'>
          {
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .libraryScheduleEnglish
          }
          <br />
          {
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .libraryBusinessHours
          }
          <br />
          (unlimited Hours of Use)
        </p>

        <div>
          {renderRichText(
            data.allContentfulLibraryMembershipPageAssembly.nodes[0]
              .libraryMembershipDescriptionEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default FourBookProgramSection;
