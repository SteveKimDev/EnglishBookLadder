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
            winterProgramDescriptionEnglish {
              winterProgramDescriptionEnglish
            }
            winterProgramDetailsEnglish {
              raw
            }
            class4 {
              classTitleEnglish
              classScheduleEnglish
              classDescriptionEnglish {
                classDescriptionEnglish
              }
            }
            class5 {
              classTitleEnglish
              classScheduleEnglish
              classDescriptionEnglish {
                classDescriptionEnglish
              }
            }
            class6 {
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
      <section
        className={`section-white-background last-section`}
        id='winter-program'
      >
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .winterProgramTitleEnglish
            }
          </h2>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
                .winterProgramDescriptionEnglish.winterProgramDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          {renderRichText(
            data.allContentfulSummerWinterProgramsPageAssembly.nodes[0]
              .winterProgramDetailsEnglish
          )}
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class4
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class4
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class4
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class5
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class5
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class5
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class6
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class6
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulSummerWinterProgramsPageAssembly.nodes[0].class6
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default WinterProgramSection;
