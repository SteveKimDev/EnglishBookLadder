import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

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
            eveningClassesEnglish {
              raw
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
          <p className={`text-center`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .eveningClassDescriptionEnglish.eveningClassDescriptionEnglish
            }
          </p>
        </div>
        <div className={`${ProgramStyle.classRichtext}`}>
          {renderRichText(
            data.allContentfulAdultClassesPageAssembly.nodes[0]
              .eveningClassesEnglish
          )}
        </div>
      </section>
    )}
  />
);

export default EveningClassSection;
