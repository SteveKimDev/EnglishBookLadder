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
            winterProgramDescriptionKorean {
              winterProgramDescriptionKorean
            }
            winterProgramDetailsKorean {
              raw
            }
            class4 {
              classTitleKorean
              classScheduleKorean
              classDescriptionKorean {
                classDescriptionKorean
              }
            }
            class5 {
              classTitleKorean
              classScheduleKorean
              classDescriptionKorean {
                classDescriptionKorean
              }
            }
            class6 {
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
      <section
        className={`section-white-background last-section`}
        id='winter-program'
      >
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .winterProgramTitleKorean
            }
          </h2>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .winterProgramDescriptionKorean.winterProgramDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .winterProgramDetailsKorean
          )}
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class4
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class4
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class4
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class5
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class5
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class5
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class6
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class6
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class6
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default WinterProgramSection;
