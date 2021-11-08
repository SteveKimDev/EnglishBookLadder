import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const MorningClassSection = () => (
  <StaticQuery
    query={graphql`
      query MorningClassesPageClassesKorean {
        allContentfulAdultClassesPageAssembly {
          nodes {
            morningClassTitleKorean
            morningClassDescriptionKorean {
              morningClassDescriptionKorean
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
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .morningClassTitleKorean
            }
          </h2>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .morningClassDescriptionKorean.morningClassDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default MorningClassSection;
