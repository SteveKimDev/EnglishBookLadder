import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

const ClassSection = () => (
  <StaticQuery
    query={graphql`
      query YoungReadersPageClassesEnglish {
        allContentfulYoungReadersPageAssembly {
          nodes {
            youngReadersTitleEnglish
            youngReadersDescriptionEnglish {
              youngReadersDescriptionEnglish
            }
            class1 {
              classTitleEnglish
              classDetailsEnglish {
                raw
              }
            }
            class2 {
              classTitleEnglish
              classDetailsEnglish {
                raw
              }
            }
            class3 {
              classTitleEnglish
              classDetailsEnglish {
                raw
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={`section-blue-background last-section`}>
        <div className={`mb-2rem`}>
          <h2 className={`section-title text-center`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0]
                .youngReadersTitleEnglish
            }
          </h2>
          <p>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0]
                .youngReadersDescriptionEnglish.youngReadersDescriptionEnglish
            }
          </p>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class1
                .classTitleEnglish
            }
          </h3>
          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulYoungReadersPageAssembly.nodes[0].class1
                .classDetailsEnglish
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class2
                .classTitleEnglish
            }
          </h3>

          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulYoungReadersPageAssembly.nodes[0].class2
                .classDetailsEnglish
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0].class3
                .classTitleEnglish
            }
          </h3>

          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulYoungReadersPageAssembly.nodes[0].class3
                .classDetailsEnglish
            )}
          </div>
        </div>
      </section>
    )}
  />
);

export default ClassSection;
