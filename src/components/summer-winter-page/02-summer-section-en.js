import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const SummerProgramSection = () => (
  <StaticQuery
    query={graphql`
      query SummerWinterProgramsPageSummerEnglish {
        allContentfulSummerWinterProgramsPageAssembly {
          nodes {
            summerProgramTitleEnglish
            summerProgramDescriptionEnglish {
              summerProgramDescriptionEnglish
            }
            summerProgramDetailsEnglish {
              raw
            }
            class1 {
              classTitleEnglish
              classScheduleEnglish
              classDescriptionEnglish {
                classDescriptionEnglish
              }
            }
            class2 {
              classTitleEnglish
              classScheduleEnglish
              classDescriptionEnglish {
                classDescriptionEnglish
              }
            }
            class3 {
              classTitleEnglish
              classScheduleEnglish
              classDescriptionEnglish {
                classDescriptionEnglish
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-blue-background`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .summerProgramTitleEnglish
            }
          </h2>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .summerProgramDescriptionEnglish.summerProgramDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .summerProgramDetailsEnglish
          )}
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class1
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class1
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class1
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class2
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class2
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class2
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class3
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class3
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class3
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default SummerProgramSection;
