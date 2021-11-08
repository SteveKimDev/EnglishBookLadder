import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const EveningClassSection = () => (
  <StaticQuery
    query={graphql`
      query EveingClassesPageClassesEnglish {
        allContentfulAdultClassesPageAssembly {
          nodes {
            eveningClassTitleEnglish
            eveningClassDescriptionEnglish {
              eveningClassDescriptionEnglish
            }
            class4 {
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
      <section className={`section-white-background`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .eveningClassTitleEnglish
            }
          </h2>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .eveningClassDescriptionEnglish.morningClassDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class4
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class4
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class4
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default EveningClassSection;
