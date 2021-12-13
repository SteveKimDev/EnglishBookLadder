import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

const MorningClassSection = () => (
  <StaticQuery
    query={graphql`
      query MorningClassesPageClassesKorean {
        allContentfulAdultClassesPageAssembly {
          nodes {
            morningClassTitleKorean
            morningClassDescriptionKorean {
              morningClassDescriptionKorean
            }
            morningClassesKorean {
              raw
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
                .morningClassTitleKorean
            }
          </h2>
          <p className={`text-center`}>
            {
              data.allContentfulAdultClassesPageAssembly.nodes[0]
                .morningClassDescriptionKorean.morningClassDescriptionKorean
            }
          </p>
        </div>
        <div className={`${ProgramStyle.classRichtext}`}>
          {renderRichText(
            data.allContentfulAdultClassesPageAssembly.nodes[0]
              .morningClassesKorean
          )}
        </div>
      </section>
    )}
  />
);

export default MorningClassSection;
