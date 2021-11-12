import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const WinterProgramSection = () => (
  <StaticQuery
    query={graphql`
      query SummerWinterProgramsPageWinterEnglish {
        allContentfulSummerWinterProgramsPageAssembly {
          nodes {
            winterProgramTitleEnglish
            winterProgramDetailsEnglish {
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
                .winterProgramTitleEnglish
            }
          </h2>
        </div>
        <div className={`mb-2rem`}>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .winterProgramDetailsEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default WinterProgramSection;
