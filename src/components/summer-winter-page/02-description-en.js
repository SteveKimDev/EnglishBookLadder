import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const DescriptionSection = () => (
  <StaticQuery
    query={graphql`
      query SummerWinterProgramsPageDescriptionEnglish {
        allContentfulSummerWinterProgramsPageAssembly {
          nodes {
            descriptionTitleEnglish
            summerWinterProgramDescriptionEnglish {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-blue-background`}>
        <h2 className={`section-title text-center`}>
          {
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .descriptionTitleEnglish
          }
        </h2>
        <div>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .summerWinterProgramDescriptionEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default DescriptionSection;
