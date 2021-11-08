import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const MorningClassSection = () => (
  <StaticQuery
    query={graphql`
      query MorningClassesPageClassesEnglish {
        allContentfulAdultClassesPageAssembly {
          nodes {
            morningClassTitleEnglish
            morningClassDescriptionEnglish {
              morningClassDescriptionEnglish
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
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .morningClassTitleEnglish
            }
          </h2>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .morningClassDescriptionEnglish.morningClassDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default MorningClassSection;
