import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const EveningClassSection = () => (
  <StaticQuery
    query={graphql`
      query EveingClassesPageClassesKorean {
        allContentfulAdultClassesPageAssembly {
          nodes {
            eveningClassTitleKorean
            eveningClassDescriptionKorean {
              eveningClassDescriptionKorean
            }
            class4 {
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
      <section className={`section-white-background`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .eveningClassTitleKorean
            }
          </h2>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .eveningClassDescriptionKorean.morningClassDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class4
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class4
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class4
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default EveningClassSection;
