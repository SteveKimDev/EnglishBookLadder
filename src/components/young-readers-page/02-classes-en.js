import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ClassSection = () => (
  <StaticQuery
    query={graphql`
      query YoungReadersPageClassesEnglish {
        allContentfulYoungReadersPageAssembly {
          nodes {
            youngReadersDescriptionEnglish {
              youngReadersDescriptionEnglish
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
      <section className={`section-blue-background last-section`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>Classes</h2>
          <p>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0]
                .youngReadersDescriptionEnglish.youngReadersDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class1
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class1
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class1
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class2
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class2
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class2
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle  mb-05rem`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class3
                .classTitleEnglish
            }
          </h3>
          <p className={`mb-05rem`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class3
                .classScheduleEnglish
            }
          </p>
          <p>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class3
                .classDescriptionEnglish.classDescriptionEnglish
            }
          </p>
        </div>
      </section>
    )}
  />
);

export default ClassSection;
