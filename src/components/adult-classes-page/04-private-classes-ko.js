import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const PrivateClassSection = () => (
  <StaticQuery
    query={graphql`
      query PrivateClassesPageClassesKorean {
        allContentfulAdultClassesPageAssembly {
          nodes {
            privateClassTitleKorean
            privateClassDescriptionKorean {
              privateClassDescriptionKorean
            }
            class5 {
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
        className={`section-blue-background last-section`}
        id='private-classes'
      >
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .privateClassTitleKorean
            }
          </h2>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .privateClassDescriptionKorean.morningClassDescriptionKorean
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classTitleKorean
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classScheduleKorean
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classDescriptionKorean.classDescriptionKorean
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default PrivateClassSection;
