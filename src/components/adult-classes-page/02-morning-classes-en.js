import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

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
            class6 {
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
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classTitleEnglish
            }
          </h3>
          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class1
                .classDetailsEnglish
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classTitleEnglish
            }
          </h3>
          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class2
                .classDetailsEnglish
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classTitleEnglish
            }
          </h3>
          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class3
                .classDetailsEnglish
            )}
          </div>
        </div>
        <div className={`mb-2rem`}>
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class6
                .classTitleEnglish
            }
          </h3>
          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class6
                .classDetailsEnglish
            )}
          </div>
        </div>
      </section>
    )}
  />
);

export default MorningClassSection;
