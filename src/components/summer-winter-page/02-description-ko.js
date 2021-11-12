import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const DescriptionSection = () => (
  <StaticQuery
    query={graphql`
      query SummerWinterProgramsPageDescriptionKorean {
        allContentfulSummerWinterProgramsPageAssembly {
          nodes {
            descriptionTitleKorean
            summerWinterProgramDescriptionKorean {
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
              .descriptionTitleKorean
          }
        </h2>
        <div>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .summerWinterProgramDescriptionKorean
          )}
        </div>
      </section>
    )}
  />
);

export default DescriptionSection;
