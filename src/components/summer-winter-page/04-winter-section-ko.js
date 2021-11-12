import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const WinterProgramSection = () => (
  <StaticQuery
    query={graphql`
      query SummerWinterProgramsPageWinterKorean {
        allContentfulSummerWinterProgramsPageAssembly {
          nodes {
            winterProgramTitleKorean
            winterProgramDetailsKorean {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section
        className={`section-blue-background last-section`}
        id='winter-program'
      >
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .winterProgramTitleKorean
            }
          </h2>
        </div>
        <div className={`mb-2rem`}>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .winterProgramDetailsKorean
          )}
        </div>
      </section>
    )}
  />
);

export default WinterProgramSection;
