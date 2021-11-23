import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

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
              classDetailsEnglish {
                raw
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
          <h3 className={`section-subtitle`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classTitleEnglish
            }
          </h3>
          <div className={`${ProgramStyle.classRichtext}`}>
            {renderRichText(
              data.allContentfulAdultClassesPageAssembly.nodes[0].class5
                .classDetailsEnglish
            )}
          </div>
        </div>
      </section>
    )}
  />
);

export default PrivateClassSection;
