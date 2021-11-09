import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const SummerProgramSection = () => (
  <StaticQuery
    query={graphql`
      query SummerWinterProgramsPageSummerKorean {
        allContentfulSummerWinterProgramsPageAssembly {
          nodes {
            summerProgramTitleKorean
            summerProgramDescriptionKorean {
              summerProgramDescriptionKorean
            }
            summerProgramDetailsKorean {
              raw
            }
            class1 {
              classTitleKorean
              classScheduleKorean
              classDescriptionKorean {
                classDescriptionKorean
              }
            }
            class2 {
              classTitleKorean
              classScheduleKorean
              classDescriptionKorean {
                classDescriptionKorean
              }
            }
            class3 {
              classTitleKorean
              classScheduleKorean
              classDescriptionKorean {
                classDescriptionKorean
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
                .summerProgramTitleKorean
            }
          </h2>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .summerProgramDescriptionKorean.summerProgramDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .summerProgramDetailsKorean
          )}
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class1
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class1
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class1
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class2
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class2
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class2
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class3
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class3
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class3
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default SummerProgramSection;
