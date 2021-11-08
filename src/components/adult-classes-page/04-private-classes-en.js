import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const PrivateClassSection = () => (
  <StaticQuery
    query={graphql`
      query PrivateClassesPageClassesEnglish {
        allContentfulAdultClassesPageAssembly {
          nodes {
            privateClassTitleEnglish
            privateClassDescriptionEnglish {
              privateClassDescriptionEnglish
            }
            class5 {
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
        className={`section-blue-background last-section`}
        id='private-classes'
      >
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .privateClassTitleEnglish
            }
          </h2>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .privateClassDescriptionEnglish.morningClassDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default PrivateClassSection;
