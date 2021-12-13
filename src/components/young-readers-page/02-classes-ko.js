import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as ProgramStyle from '../library-membership-page/programs.module.css';

const ClassSection = () => (
  <StaticQuery
    query={graphql`
      query YoungReadersPageClassesKorean {
        allContentfulYoungReadersPageAssembly {
          nodes {
            youngReadersTitleKorean
            youngReadersDescriptionKorean {
              youngReadersDescriptionKorean
            }
            youngReadersClassesKorean {
              raw
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
                .youngReadersTitleKorean
            }
          </h2>
          <p className={`text-center`}>
            {
              data.allContentfulYoungReadersPageAssembly.nodes[0]
                .youngReadersDescriptionKorean.youngReadersDescriptionKorean
            }
          </p>
        </div>
        <div className={`${ProgramStyle.classRichtext}`}>
          {renderRichText(
            data.allContentfulYoungReadersPageAssembly.nodes[0]
              .youngReadersClassesKorean
          )}
        </div>
      </section>
    )}
  />
);

export default ClassSection;
