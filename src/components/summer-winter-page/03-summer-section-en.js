import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

const SummerProgramSection = () => (
  <StaticQuery
    query={graphql`
      query SummerWinterProgramsPageSummerEnglish {
        allContentfulSummerWinterProgramsPageAssembly {
          nodes {
            summerProgramTitleEnglish
            summerProgramDetailsEnglish {
              raw
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-white-background`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .summerProgramTitleEnglish
            }
          </h2>
        </div>
        <div
          className={`${ProgramStyle.classRichtext} ${ProgramStyle.summerWinterRichtext}`}
        >
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .summerProgramDetailsEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default SummerProgramSection;
